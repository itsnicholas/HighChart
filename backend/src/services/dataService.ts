/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios from 'axios';
import * as logger from '../../utils/logger';
import { TimeSeriesResponseFormat, ErrorMessage } from '../types';


// Alpha Vantage apikey/token
const token = process.env.ALPHAVANTAGE_TOKEN;
// Alpha Vantage API request url and 'token'
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${token}`;


const getData = async () => {
  try {
    // GET request to Alpha Vantage API
    const response = await axios.get<TimeSeriesResponseFormat | ErrorMessage>(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    logger.error(error, 'error happened in getData in dataService.ts');
    return undefined;
  }
};

const updateData = async (): Promise<Array<[string, number]> | Error | undefined> => {
  const allData = await getData();
  
  if (allData !== undefined && allData !== null) {
    if (Object.keys(allData).includes("Time Series (Daily)")) {

      // Reversed array of object's own enumerable property names
      const dates: string[] = 
      Object
        .keys(allData["Time Series (Daily)"])
        .reverse();

      // Reversed array of object's own enumerable property values
      // populated by "4. close" element as Number data type
      const prices: number[] = 
        Object
          .values(allData["Time Series (Daily)"])
          .reverse()
          .map(x => x["4. close"])
          .map(Number);

      /**
       * Map function: combine arrays into a suitable form for
       * Highchart and take in account AAPL stock split on 
       * a 4-for-1 basis on August 28, 2020
      */
      const data: Array<[string, number]> = dates.map((date, i) => {
        // Change prices before stock split by comparing dates
        if (new Date(date) < new Date('2020-08-29')) {
          prices[i] = prices[i]/4;
        }
        return [date, prices[i]];
      });

      return data;
    // Handling error messages
    } else if (Object.keys(allData).includes("Error Message")) {
      const errors: string[] = Object.values(allData).map(String);
      throw {name: "Error", message: "Error: " + errors[0]};
    // Handling notes
    } else if (Object.keys(allData).includes("Note")) {
      const notes: string[] = Object.values(allData).map(String);
      throw {name: "Note", message: "Note: " + notes[0]};
    // Handling other issues
    } else {
      throw {name: "Undefined error", message: allData};
    }
  }
  // Handling leftover issues
  throw new Error("Undefined error");
};

export default {
  updateData
};
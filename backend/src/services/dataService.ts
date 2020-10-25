import { TimeSeriesResponseFormat } from '../types';

import axios from 'axios';

// Alpha Vantage apikey/token
const token = process.env.ALPHAVANTAGE_TOKEN;
// Alpha Vantage API request url and 'token'
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${token}`;


const getData = async () => {
  try {
    // GET request to Alpha Vantage API
    const response = await axios.get<TimeSeriesResponseFormat>(url);
    console.log(response.data, 'response in getData in backend');
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

const updateData = async (): Promise<Array<[string, number]> | undefined> => {
  const allData = await getData();
  console.log(allData, 'allData in backend');
  
  if (allData !== undefined) {

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

    console.log(data, 'data in dataService.ts');

    return data;

  } else {
    return undefined;
  }
};

export default {
  updateData
};
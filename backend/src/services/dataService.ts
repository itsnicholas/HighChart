import { TimeSeriesResponseFormat } from '../types';

import axios from 'axios';

// Alpha Vantage apikey/token
const token = process.env.ALPHAVANTAGE_TOKEN;
// Alpha Vantage API request url and 'token'
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${token}`;
// GET request to Alpha Vantage API

const getData = async () => {
  try {
     const response = await axios.get<TimeSeriesResponseFormat>(url);
     console.log(response.data, 'response in getData in backend');
     return response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateData = async (): Promise<TimeSeriesResponseFormat | undefined> => {
  const allData = await getData();
  console.log(allData, 'allData in backend');
  //edit allData to suitable format here
  return allData;
};

export default {
  updateData
};
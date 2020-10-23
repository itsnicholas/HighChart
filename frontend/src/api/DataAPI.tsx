import { Dispatch } from 'react';
import axios from 'axios';

import { TimeSeriesResponseFormat } from "../types";


export const onData = (setStocks: Dispatch<TimeSeriesResponseFormat>) => {
  // Backend url
  const baseUrl = '/api/data';
  return axios
    .get<TimeSeriesResponseFormat>(baseUrl)
    // Handle success
    // Add response data to 'stocks'
    .then(response => 
      setStocks(response.data))
    // Handle error
    .catch(error => {
      throw error;
    });
};
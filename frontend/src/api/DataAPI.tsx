import { Dispatch } from 'react';
import axios from 'axios';


export const onData = (setData: Dispatch<Array<[string, number]>>) => {
  // Backend url
  const baseUrl = '/api/data';
  // GET request to backend
  return axios
    .get<Array<[string, number]>>(baseUrl)
    // Handle success
    // Add response data to 'data'
    .then(response => 
      setData(response.data))
    // Handle error
    .catch(error => {
      throw error;
    });
};
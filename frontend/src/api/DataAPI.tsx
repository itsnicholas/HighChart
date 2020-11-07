import { Dispatch } from 'react';
import axios from 'axios';


export const onData = (setData: Dispatch<Array<[string, number]>>, setError: Dispatch<string>) => {
  // Backend url
  const baseUrl = '/api/data';
  // GET request to backend
  return axios
    .get<Array<[string, number]>>(baseUrl)
    // Handle success
    .then(response =>
      // Add response data to 'data'
      setData(response.data))
    // Handle error
    .catch(error => {
      // Add error response data to 'message'
      setError(JSON.stringify(error.response.data.error) as string)
      console.log(error)
    });
};
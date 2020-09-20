import express from 'express';
import axios from 'axios';

const router = express.Router();

// Import types
import { TimeSeriesResponseFormat } from '../types';

router.get('/', (_req, res) => {
  // Alpha Vantage apikey/token
  const token = process.env.ALPHAVANTAGE_TOKEN;
  // Alpha Vantage API request url and 'token'
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${token}`;
  
  // GET request to Alpha Vantage API
  axios.get<TimeSeriesResponseFormat>(url)
    .then(response => {
      // handle success
      console.log(response.data,'response.data in index.ts');
      // send data with response
      res.send(response.data);
    })
    .catch(error => {
      // handle error
      console.log(error);
  });
});

export default router;
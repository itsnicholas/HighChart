import express from 'express';
import axios from 'axios';

import { TimeSeriesResponseFormat } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
  const token = process.env.ALPHAVANTAGE_TOKEN as string;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${token}`;
  
  axios.get<TimeSeriesResponseFormat>(url)
    .then(response => {
      console.log(response.data,'response.data in index.ts');
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
  });

});

export default router;
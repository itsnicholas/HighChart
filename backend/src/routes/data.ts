import express from 'express';
import axios from 'axios';

import { DataEntry } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
  const token = process.env.FINNHUB_TOKEN;
  axios.get<DataEntry>(`https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590&token=${token}`)
    .then(response => {
      console.log(response.data,'response.data in index.ts');
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
  });
});

export default router;
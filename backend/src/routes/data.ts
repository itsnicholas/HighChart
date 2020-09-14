import express from 'express';
import dataService from '../services/dataServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(dataService.getEntries());
});

export default router;
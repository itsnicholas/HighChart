import express from 'express';
import dataService from '../services/dataService';

const router = express.Router();

router.get('/', (_req, res) => {
  dataService.updateData()
    .then(result => res.send(result))
    .catch(error => {
      throw error;
    });
});

export default router;
import express from 'express';
import dataService from '../services/dataService';
import * as logger from '../../utils/logger';

const router = express.Router();

router.get('/', (_request, response, next) => {
  dataService.updateData()
    .then(result => {
      if (result) {
        response.send(result);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => {
      logger.error(error, "catch error in data.ts");
      next(error);
    });
});


export default router;
import { Request, Response, NextFunction } from "express";
import * as logger from './logger';

// Custom middleware for handling errors
export const errorHandler = (error: Record<string, undefined | string>, _request: Request, response: Response, next: NextFunction): Response<string> | undefined => {
  logger.error(error.message, 'error.message in errorHandler');
  
  if (error.message) {
    return response.status(400).send({ error: error.message });
  }
  
  next(error);
};

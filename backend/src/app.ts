import express from 'express';
const app = express();
import cors from 'cors';
import dataRouter from './controllers/data';
import * as middleware from './../utils/middleware';

// Specify middleware function
app.use(cors());

app.use(express.static('build'));

// Specify middleware function
app.use(express.json());

// Specify middleware as the callback function
app.use('/api/data', dataRouter);

//app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
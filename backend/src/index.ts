import express from 'express';
const app = express();
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();
import dataRouter from './routes/data';

// Specify middleware function
app.use(cors());

// Specify middleware function
app.use(express.json());

// Specify middleware as the callback function
app.use('/api/data', dataRouter);

// Specify environment variable PORT
const PORT = process.env.PORT || 3001;

// Bind and listen for connections on specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
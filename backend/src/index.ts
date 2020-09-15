import express from 'express';
const app = express();
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();
import dataRouter from './routes/data';

app.use(cors());

app.use(express.json());

app.use('/api/data', dataRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
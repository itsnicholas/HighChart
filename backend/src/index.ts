import express from 'express';
import dataRouter from './routes/data';
const app = express();
import cors from 'cors';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/data', dataRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
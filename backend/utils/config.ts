import * as dotenv from 'dotenv';
dotenv.config();

// Handling of environment variables
export const PORT = process.env.PORT;
export const ALPHAVANTAGE_TOKEN = process.env.ALPHAVANTAGE_TOKEN;
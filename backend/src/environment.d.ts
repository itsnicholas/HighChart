declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALPHAVANTAGE_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT: number;
    }
  }
}
  
export {};
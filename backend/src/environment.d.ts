declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FINNHUB_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
    }
  }
}
  
export {};
import 'dotenv/config';

export interface IConfig {
  mongoUrl: string;
  crypto: {
    secretKey: string;
    initializationVector: string;
  };
}

export const getConfig = (): IConfig => ({
  mongoUrl: process.env.MONGO_URL || '',
  crypto: {
    secretKey: process.env.CRYPT_SECRET_KEY || '',
    initializationVector: process.env.CRYPT_IV || '',
  },
});

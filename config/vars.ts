import 'dotenv/config';

export const config = {
  mongoUrl: process.env.MONGO_URL || '',
};

import mongoose from 'mongoose';
import { config } from '@config/vars';

export const getMongoConnection = async () => {
  console.log(config);
  return mongoose.connect(config.mongoUrl);
};

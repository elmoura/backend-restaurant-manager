import { config } from '@config/vars';
import mongoose from 'mongoose';

export const getMongoConnection = async () => {
  return mongoose.connect(config.mongoUrl);
};

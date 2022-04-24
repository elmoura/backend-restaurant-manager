import mongoose from 'mongoose';
import { getConfig } from './vars';

export const getMongoConnection = async () => {
  return mongoose.connect(getConfig().mongoUrl);
};

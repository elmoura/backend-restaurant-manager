import mongoose from 'mongoose';
import { getConfig } from '@config/vars';

export const getMongoConnection = async () => {
  const config = getConfig();
  console.log(config);
  return mongoose.connect(config.mongoUrl);
};

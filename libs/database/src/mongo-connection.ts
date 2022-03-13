import { config } from '@config/vars';
import mongoose from 'mongoose';

mongoose.connect(config.mongoUrl);

import mongoose from 'mongoose';

export const MONGO_CONNECTION_PROVIDER = 'MongoConnection';

export type MongoConnection = typeof mongoose;

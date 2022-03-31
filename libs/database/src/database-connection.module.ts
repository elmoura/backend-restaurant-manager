import { AsyncContainerModule, interfaces } from 'inversify';
import { getMongoConnection } from './mongo-connection';
import {
  MongoConnection,
  MONGO_CONNECTION_PROVIDER,
} from './types/mongo-connection.type';

export const databaseConnectionModule = new AsyncContainerModule(
  async (bind: interfaces.Bind) => {
    const mongoConnection = await getMongoConnection();

    bind<MongoConnection>(MONGO_CONNECTION_PROVIDER).toConstantValue(
      mongoConnection
    );
  }
);

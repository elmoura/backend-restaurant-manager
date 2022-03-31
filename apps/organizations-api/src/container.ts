import 'reflect-metadata';
import { Container } from 'inversify';
import { databaseConnectionModule } from '@libs/database';
import { organizationsModule } from '@libs/organizations';

const dependenciesContainer = new Container();

const setupApplicationDependecies = async (): Promise<void> => {
  await dependenciesContainer.loadAsync(databaseConnectionModule);
  await dependenciesContainer.load(organizationsModule);
};

setupApplicationDependecies();

export { dependenciesContainer };

import { Container } from 'inversify';
import { getMongoConnection } from '@chefin/config';
import { organizationsModule } from '@chefin/organizations';

const dependenciesContainer = new Container();

const setupApplicationDependecies = async (): Promise<void> => {
  await getMongoConnection();
  await dependenciesContainer.load(organizationsModule);
};

setupApplicationDependecies();

export { dependenciesContainer };

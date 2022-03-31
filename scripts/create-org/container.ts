import { Container } from 'inversify';
import { databaseConnectionModule } from '@libs/database';
import { organizationsModule } from '@libs/organizations';

const container = new Container();
container.load(databaseConnectionModule);
container.load(organizationsModule);

export { container };

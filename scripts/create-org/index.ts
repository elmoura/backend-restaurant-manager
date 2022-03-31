import { Container } from 'inversify';
import { databaseConnectionModule } from '@libs/database';
import {
  CreateOrganizationInput,
  CreateOrganizationUC,
  CREATE_ORGANIZATION_UC_PROVIDER,
  organizationsModule,
} from '@libs/organizations';

const createOrgContainer = new Container();
createOrgContainer.load(databaseConnectionModule);
createOrgContainer.load(organizationsModule);

const createOrgUseCase = createOrgContainer.get<CreateOrganizationUC>(
  CREATE_ORGANIZATION_UC_PROVIDER
);

const orgToCreate: CreateOrganizationInput = {
  name: 'Cazé Lanches',
  businessSegment: 'alimentação',
  locations: [],
};

createOrgUseCase.execute();

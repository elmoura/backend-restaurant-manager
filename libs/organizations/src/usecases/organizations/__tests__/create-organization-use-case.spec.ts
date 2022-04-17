import { Container } from 'inversify';
import {
  IOrganizationDataSource,
  ORGANIZATION_DATASOURCE_PROVIDER,
} from '@libs/organizations';
import { MongoOrganizationDataSource } from '@libs/organizations/src/datasources/mongo-organization.datasource';
import { CreateOrganizationInput } from '../dto/create-organization.dto';
import {
  CreateOrganizationUseCase,
  CREATE_ORGANIZATION_UC_PROVIDER,
} from '../create-organization.usecase';

jest.mock('@libs/organizations/src/datasources/mongo-organization.datasource');

describe('CreateOrganizationUseCase tests', () => {
  let createOrganizationUseCase: CreateOrganizationUseCase;

  beforeAll(() => {
    const testContainer = new Container();

    testContainer
      .bind<IOrganizationDataSource>(ORGANIZATION_DATASOURCE_PROVIDER)
      .to(MongoOrganizationDataSource);

    testContainer
      .bind(CREATE_ORGANIZATION_UC_PROVIDER)
      .to(CreateOrganizationUseCase);

    createOrganizationUseCase = testContainer.get(
      CREATE_ORGANIZATION_UC_PROVIDER
    );
  });

  test('deve criar organizaçao com sucesso', async () => {
    const testOrganization: CreateOrganizationInput = {
      name: 'Cazé lanches',
      businessSegment: 'fortissimo',
      locations: [],
    };

    const result = await createOrganizationUseCase.execute(testOrganization);

    expect(result._id).toBeTruthy();
    expect(result.name).toEqual(testOrganization.name);
    expect(result.businessSegment).toEqual(testOrganization.businessSegment);
  });
});

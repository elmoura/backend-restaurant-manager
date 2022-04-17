import { Container } from 'inversify';
import { organizationsModule } from '@libs/organizations';
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
    testContainer.load(organizationsModule);

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

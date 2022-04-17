import { Container } from 'inversify';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from '@libs/organizations';
import {
  CryptoService,
  ICryptoService,
  CRYPTO_SERVICE_PROVIDER,
} from '@libs/common';
import { MongoOrganizationUserDataSource } from '@libs/organizations/src/datasources/mongo-organization-user.datasource';
import {
  CreateUserUseCase,
  CREATE_USER_UC_PROVIDER,
} from '../create-user.usecase';
import { CreateUserInput } from '../dto/create-user.dto';

jest.mock(
  '@libs/organizations/src/datasources/mongo-organization-user.datasource'
);

describe('CreateUserUseCase tests', () => {
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    const testContainer = new Container();

    testContainer.bind(CREATE_USER_UC_PROVIDER).to(CreateUserUseCase);

    testContainer
      .bind<ICryptoService>(CRYPTO_SERVICE_PROVIDER)
      .to(CryptoService);

    testContainer
      .bind<IOrganizationUserDataSource>(ORGANIZATION_USER_DATASOURCE_PROVIDER)
      .to(MongoOrganizationUserDataSource);

    createUserUseCase = testContainer.get(CREATE_USER_UC_PROVIDER);
  });

  const testUserPayload: CreateUserInput = {
    email: 'yumoto@cazelanches.com',
    firstName: 'Gustavo',
    lastName: 'Yumoto',
    organizationId: 'cazelanchesporra',
    password: 'brelelelele',
    phoneNumber: '1399999999',
  };

  test('deve criar um usuario com sucesso', async () => {
    jest
      .spyOn(createUserUseCase.organizationUserDataSource, 'findByEmail')
      .mockImplementationOnce(async () => null);

    const result = await createUserUseCase.execute(testUserPayload);

    expect(result._id).toBeDefined();
    expect(result.email).toEqual(testUserPayload.email);
    expect(result.organizationId).toEqual(testUserPayload.organizationId);
    expect(result.phoneNumber).toEqual(testUserPayload.phoneNumber);
  });

  test('deve jogar um erro caso já exista um usuário com o email informado', async () => {
    try {
      await createUserUseCase.execute(testUserPayload);
    } catch (error) {
      expect(error.message).toEqual(
        `User with e-mail "${testUserPayload.email}" already exists`
      );
    }
  });
});

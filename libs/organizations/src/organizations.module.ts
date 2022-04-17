import { ContainerModule, interfaces } from 'inversify';
import {
  CryptoService,
  CRYPTO_SERVICE_PROVIDER,
  ICryptoService,
} from '@libs/common';
import {
  IOrganizationDataSource,
  ORGANIZATION_DATASOURCE_PROVIDER,
} from './datasources/types/organization-datasouce.type';
import { MongoOrganizationDataSource } from './datasources/mongo-organization.datasource';
import {
  CreateOrganizationUseCase,
  CREATE_ORGANIZATION_UC_PROVIDER,
} from './usecases/organizations/create-organization.usecase';
import { MongoOrganizationUserDataSource } from './datasources/mongo-organization-user.datasource';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from './datasources/types/organization-user-datasouce.type';
import {
  CreateUserUseCase,
  CREATE_USER_UC_PROVIDER,
} from './usecases/organization-users/create-user.usecase';
import {
  UpdateUserUseCase,
  UPDATE_USER_UC_PROVIDER,
} from './usecases/organization-users/update-user.usecase';

export const organizationsModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind<ICryptoService>(CRYPTO_SERVICE_PROVIDER).to(CryptoService);

    bind<IOrganizationDataSource>(ORGANIZATION_DATASOURCE_PROVIDER).to(
      MongoOrganizationDataSource
    );

    bind<IOrganizationUserDataSource>(ORGANIZATION_USER_DATASOURCE_PROVIDER).to(
      MongoOrganizationUserDataSource
    );

    bind<CreateOrganizationUseCase>(CREATE_ORGANIZATION_UC_PROVIDER).to(
      CreateOrganizationUseCase
    );

    bind<CreateUserUseCase>(CREATE_USER_UC_PROVIDER).to(CreateUserUseCase);

    bind<UpdateUserUseCase>(UPDATE_USER_UC_PROVIDER).to(UpdateUserUseCase);
  }
);

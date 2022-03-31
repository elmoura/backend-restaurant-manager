import { ContainerModule, interfaces } from 'inversify';
import {
  IOrganizationDataSource,
  ORGANIZATION_DATASOURCE_PROVIDER,
} from './datasources/types/organization-datasouce.type';
import { OrganizationDataSource } from './datasources/organization.datasource';
import {
  CreateOrganizationUseCase,
  CREATE_ORGANIZATION_UC_PROVIDER,
} from './usecases/create-org/create-organization.usecase';
import { OrganizationUserDataSource } from './datasources/organization-user.datasource';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from './datasources/types/organization-user-datasouce.type';
import {
  CreateUserUseCase,
  CREATE_USER_UC_PROVIDER,
} from './usecases/create-user/create-user.usecase';
import {
  UpdateUserUseCase,
  UPDATE_USER_UC_PROVIDER,
} from './usecases/update-user/update-user.usecase';

export const organizationsModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind<IOrganizationDataSource>(ORGANIZATION_DATASOURCE_PROVIDER).to(
      OrganizationDataSource
    );

    bind<IOrganizationUserDataSource>(ORGANIZATION_USER_DATASOURCE_PROVIDER).to(
      OrganizationUserDataSource
    );

    bind<CreateOrganizationUseCase>(CREATE_ORGANIZATION_UC_PROVIDER).to(
      CreateOrganizationUseCase
    );

    bind<CreateUserUseCase>(CREATE_USER_UC_PROVIDER).to(CreateUserUseCase);

    bind<UpdateUserUseCase>(UPDATE_USER_UC_PROVIDER).to(UpdateUserUseCase);
  }
);

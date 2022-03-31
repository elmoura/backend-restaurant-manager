import { ContainerModule, interfaces } from 'inversify';
import { BaseUseCase } from '@libs/common';
import {
  IOrganizationDataSource,
  ORGANIZATION_DATASOURCE_PROVIDER,
} from './datasources/types/organization-datasouce.type';
import { OrganizationDataSource } from './datasources/organization.datasource';
import {
  CreateOrganizationUC,
  CREATE_ORGANIZATION_UC_PROVIDER,
} from './usecases/create-org/create-organization.usecase';
import { Organization } from './entities/organization';
import { CreateOrganizationInput } from './usecases/create-org/dto/create-organization.dto';
import { OrganizationUserDataSource } from './datasources/organization-user.datasource';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from './datasources/types/organization-user-datasouce.type';

export const organizationsModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind<IOrganizationDataSource>(ORGANIZATION_DATASOURCE_PROVIDER).to(
      OrganizationDataSource
    );

    bind<BaseUseCase<CreateOrganizationInput, Organization>>(
      CREATE_ORGANIZATION_UC_PROVIDER
    ).to(CreateOrganizationUC);

    bind<IOrganizationUserDataSource>(ORGANIZATION_USER_DATASOURCE_PROVIDER).to(
      OrganizationUserDataSource
    );
  }
);

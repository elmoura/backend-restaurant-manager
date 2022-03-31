import { inject, injectable } from 'inversify';
import { BaseUseCase } from '@libs/common';
import {
  IOrganizationDataSource,
  ORGANIZATION_DATASOURCE_PROVIDER,
} from '../datasources/types/organization-datasouce.type';
import { Organization } from '../entities/organization';
import { CreateOrganizationInput } from './dto/create-organization.dto';

export const CREATE_ORGANIZATION_UC_PROVIDER = 'CreateOrganizationUC';

@injectable()
export class CreateOrganizationUC
  implements BaseUseCase<CreateOrganizationInput, Organization>
{
  constructor(
    @inject(ORGANIZATION_DATASOURCE_PROVIDER)
    private organizationDataSource: IOrganizationDataSource
  ) {}

  async execute(input: CreateOrganizationInput): Promise<Organization> {
    const locations = input.locations || [];

    return this.organizationDataSource.create({
      ...input,
      locations,
    });
  }
}

import { BaseUseCase } from '@libs/common';
import { inject } from 'inversify';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from '../../datasources/types/organization-user-datasouce.type';
import { OrganizationUser } from '../../entities/organization-user';
import { UpdateUserInput } from './dto/update-user.dto';

export class UpdateUserUC
  implements BaseUseCase<UpdateUserInput, OrganizationUser>
{
  constructor(
    @inject(ORGANIZATION_USER_DATASOURCE_PROVIDER)
    private organizationUserDataSource: IOrganizationUserDataSource
  ) {}

  execute(payload: UpdateUserInput): Promise<OrganizationUser> {
    const { organizationId, _id: userId } = payload;

    const userExists = this.organizationUserDataSource.findByIdAndOrg(
      userId,
      organizationId
    );

    if (!userExists) {
      throw new Error(`User with ID "${userId}" does not exist.`);
    }

    return this.organizationUserDataSource;
  }
}

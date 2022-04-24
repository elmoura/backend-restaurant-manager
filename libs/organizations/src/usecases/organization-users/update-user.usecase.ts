import { inject, injectable } from 'inversify';
import { IBaseUseCase } from '@chefin/common';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from '../../datasources/types/organization-user-datasouce.type';
import { OrganizationUser } from '../../entities/organization-user';
import { UpdateUserInput } from './dto/update-user.dto';

export const UPDATE_USER_UC_PROVIDER = 'UpdateUserUseCase';

@injectable()
export class UpdateUserUseCase
  implements IBaseUseCase<UpdateUserInput, OrganizationUser>
{
  constructor(
    @inject(ORGANIZATION_USER_DATASOURCE_PROVIDER)
    private organizationUserDataSource: IOrganizationUserDataSource
  ) {}

  async execute(payload: UpdateUserInput): Promise<OrganizationUser> {
    const { organizationId, _id: userId } = payload;

    const userExists = this.organizationUserDataSource.findByIdAndOrg(
      userId,
      organizationId
    );

    if (!userExists) {
      throw new Error(`User with ID "${userId}" does not exist.`);
    }

    const result = await this.organizationUserDataSource.updateOne(userId, {
      ...payload,
      _id: userId,
      organizationId,
    });

    if (!result) {
      throw new Error('Error updating user.');
    }

    return result;
  }
}

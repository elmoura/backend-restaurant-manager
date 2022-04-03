import { inject, injectable } from 'inversify';
import { IBaseUseCase } from '@libs/common';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from '../../../datasources/types/organization-user-datasouce.type';
import { OrganizationUser } from '../../../entities/organization-user';
import { CreateUserInput } from './dto/create-user.dto';

export const CREATE_USER_UC_PROVIDER = 'CreateUserUseCase';

@injectable()
export class CreateUserUseCase
  implements IBaseUseCase<CreateUserInput, OrganizationUser>
{
  constructor(
    @inject(ORGANIZATION_USER_DATASOURCE_PROVIDER)
    private organizationUserDataSource: IOrganizationUserDataSource
  ) {}

  async execute(payload: CreateUserInput): Promise<OrganizationUser> {
    const { email, organizationId } = payload;

    const userAlreadyExists =
      await this.organizationUserDataSource.findByEmailAndOrg(
        email,
        organizationId
      );

    if (userAlreadyExists) {
      throw new Error(`User with e-mail "${email}" already exists`);
    }

    return this.organizationUserDataSource.createOne(payload);
  }
}

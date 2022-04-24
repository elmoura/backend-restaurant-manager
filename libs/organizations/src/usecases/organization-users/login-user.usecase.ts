import { IBaseUseCase } from '@chefin/common';
import { inject, injectable } from 'inversify';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from '../../datasources/types/organization-user-datasouce.type';
import { OrganizationUser } from '../../entities/organization-user';
import { LoginUserInput } from './dto/login-user.dto';

@injectable()
export class LoginUserUseCase
  implements IBaseUseCase<LoginUserInput, OrganizationUser>
{
  constructor(
    @inject(ORGANIZATION_USER_DATASOURCE_PROVIDER)
    private organizationUserDataSource: IOrganizationUserDataSource
  ) {}

  async execute({
    email,
    password,
  }: LoginUserInput): Promise<OrganizationUser> {
    const user = await this.organizationUserDataSource.findByEmailAndPassword({
      email,
      password,
    });

    if (!user) {
      throw new Error('Login inválido');
    }

    return user;
  }
}

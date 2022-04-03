import { IBaseUseCase } from '@libs/common';
import { injectable } from 'inversify';
import { OrganizationUser } from '../../../entities/organization-user';
import { LoginUserInput } from './dto/login-user.dto';

@injectable()
export class LoginUserUseCase
  implements IBaseUseCase<LoginUserInput, OrganizationUser>
{
  constructor() {}

  execute(input: LoginUserInput): Promise<OrganizationUser> {}
}

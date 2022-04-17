import { inject, injectable } from 'inversify';
import {
  CRYPTO_SERVICE_PROVIDER,
  IBaseUseCase,
  ICryptoService,
} from '@libs/common';
import {
  IOrganizationUserDataSource,
  ORGANIZATION_USER_DATASOURCE_PROVIDER,
} from '../../datasources/types/organization-user-datasouce.type';
import { OrganizationUser } from '../../entities/organization-user';
import { CreateUserInput } from './dto/create-user.dto';

export const CREATE_USER_UC_PROVIDER = 'CreateUserUseCase';

@injectable()
export class CreateUserUseCase
  implements IBaseUseCase<CreateUserInput, OrganizationUser>
{
  constructor(
    @inject(CRYPTO_SERVICE_PROVIDER)
    private cryptoService: ICryptoService,

    @inject(ORGANIZATION_USER_DATASOURCE_PROVIDER)
    public readonly organizationUserDataSource: IOrganizationUserDataSource
  ) {}

  async execute(payload: CreateUserInput): Promise<OrganizationUser> {
    const { email } = payload;

    const userAlreadyExists = await this.organizationUserDataSource.findByEmail(
      email
    );

    if (userAlreadyExists) {
      throw new Error(`User with e-mail "${email}" already exists`);
    }

    const encryptedPassword = this.cryptoService.encrypt(payload.password);

    return this.organizationUserDataSource.createOne({
      ...payload,
      password: encryptedPassword,
    });
  }
}

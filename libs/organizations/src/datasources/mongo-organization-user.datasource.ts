import { injectable } from 'inversify';
import { ModelType } from '@typegoose/typegoose/lib/types';
import {
  OrganizationUser,
  OrganizationUserModel,
} from '../entities/organization-user';
import {
  IOrganizationUserDataSource,
  UserLoginParams,
} from './types/organization-user-datasouce.type';

@injectable()
export class MongoOrganizationUserDataSource
  implements IOrganizationUserDataSource
{
  private organizationUserRepository: ModelType<OrganizationUser>;

  constructor() {
    this.organizationUserRepository = OrganizationUserModel;
  }

  async createOne(
    payload: Omit<OrganizationUser, '_id'>
  ): Promise<OrganizationUser> {
    return this.organizationUserRepository.create(payload);
  }

  async findByIdAndOrg(
    userId: string,
    organizationId: string
  ): Promise<OrganizationUser | null> {
    return this.organizationUserRepository.findOne({
      _id: userId,
      organizationId,
    });
  }

  async findByEmailAndOrg(
    email: string,
    organizationId: string
  ): Promise<OrganizationUser | null> {
    return this.organizationUserRepository.findOne({
      email,
      organizationId,
    });
  }

  async updateOne(
    userId: string,
    payload: Partial<OrganizationUser>
  ): Promise<OrganizationUser | null> {
    return this.organizationUserRepository.findByIdAndUpdate(userId, payload);
  }

  async findByEmailAndPassword({
    email,
    password,
  }: UserLoginParams): Promise<OrganizationUser | null> {
    return this.organizationUserRepository.findOne({ email, password });
  }
}

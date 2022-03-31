import { injectable } from 'inversify';
import {
  OrganizationUser,
  OrganizationUserModel,
} from '../entities/organization-user';
import { IOrganizationUserDataSource } from './types/organization-user-datasouce.type';

@injectable()
export class OrganizationUserDataSource implements IOrganizationUserDataSource {
  async createOne(
    payload: Omit<OrganizationUser, '_id'>
  ): Promise<OrganizationUser> {
    return OrganizationUserModel.create(payload);
  }

  async findByIdAndOrg(
    userId: string,
    organizationId: string
  ): Promise<OrganizationUser | null> {
    return OrganizationUserModel.findOne({
      _id: userId,
      organizationId,
    });
  }

  async findByEmailAndOrg(
    email: string,
    organizationId: string
  ): Promise<OrganizationUser | null> {
    return OrganizationUserModel.findOne({
      email,
      organizationId,
    });
  }

  async updateOne(
    userId: string,
    payload: Partial<OrganizationUser>
  ): Promise<OrganizationUser | null> {
    const result = await OrganizationUserModel.findOneAndUpdate(
      { _id: userId },
      payload
    );

    return result;
  }
}

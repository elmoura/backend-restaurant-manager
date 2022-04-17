import { injectable } from 'inversify';
import { ObjectId } from 'mongodb';
import { OrganizationUser } from '../../entities/organization-user';
import {
  IOrganizationUserDataSource,
  UserLoginParams,
} from '../types/organization-user-datasouce.type';
import { MOCKED_ORGANIZATION } from './mongo-organization.datasource';

export const MOCKED_USER: OrganizationUser = {
  _id: new ObjectId().toString(),
  organizationId: MOCKED_ORGANIZATION._id || new ObjectId().toString(),
  email: 'yumoto@paidoseufilho.com',
  firstName: 'Gustavo',
  lastName: 'Yumoto',
  password: 'xesquedelebrelelele',
  phoneNumber: '1399999999',
  createdAt: new Date(),
  updatedAt: new Date(),
};

@injectable()
export class MongoOrganizationUserDataSource
  implements IOrganizationUserDataSource
{
  async updateOne(
    userId: string,
    payload: Partial<OrganizationUser>
  ): Promise<OrganizationUser | null> {
    return {
      ...MOCKED_USER,
      _id: userId,
      ...payload,
    };
  }

  async createOne(
    payload: Omit<OrganizationUser, '_id'>
  ): Promise<OrganizationUser> {
    return {
      _id: new ObjectId().toString(),
      ...payload,
    };
  }

  async findByEmail(email: string): Promise<OrganizationUser | null> {
    return {
      ...MOCKED_USER,
      email,
    };
  }

  async findByIdAndOrg(
    userId: string,
    organizationId: string
  ): Promise<OrganizationUser | null> {
    return {
      ...MOCKED_USER,
      _id: userId,
      organizationId,
    };
  }

  async findByEmailAndPassword({
    email,
    password,
  }: UserLoginParams): Promise<OrganizationUser | null> {
    return {
      ...MOCKED_USER,
      email,
      password,
    };
  }
}

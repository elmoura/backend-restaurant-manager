import { OrganizationUser } from '../../entities/organization-user';

export type UserLoginParams = {
  email: string;
  password: string;
};

export interface IOrganizationUserDataSource {
  findByIdAndOrg(
    userId: string,
    organizationId: string
  ): Promise<OrganizationUser | null>;
  findByEmail(email: string): Promise<OrganizationUser | null>;
  findByEmailAndPassword(
    payload: UserLoginParams
  ): Promise<OrganizationUser | null>;
  createOne(payload: Omit<OrganizationUser, '_id'>): Promise<OrganizationUser>;
  updateOne(
    userId: string,
    payload: Partial<OrganizationUser>
  ): Promise<OrganizationUser | null>;
}

export const ORGANIZATION_USER_DATASOURCE_PROVIDER =
  'OrganizationUserDataSource';

import {
  CreateOrganizationInput,
  CreateUserInput,
  Organization,
  OrganizationUser,
} from '@libs/organizations';

export interface CreateOrgWithUserInput extends CreateOrganizationInput {
  user: CreateUserInput;
}

export interface CreateOrgWithUserOutput extends Organization {
  createdUser: Omit<OrganizationUser, 'password'>;
}

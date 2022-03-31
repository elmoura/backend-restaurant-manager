import { Organization } from '../../entities/organization';

export interface IOrganizationDataSource {
  findById(organizationId: string): Promise<Organization | null>;
  create(payload: Omit<Organization, '_id'>): Promise<Organization>;
  updateOne(organizationId: string, payload: Partial<Organization>);
}

export const ORGANIZATION_DATASOURCE_PROVIDER = 'OrganizationDataSource';

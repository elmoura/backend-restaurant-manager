import { injectable } from 'inversify';
import { Organization, OrganizationModel } from '../entities/organization';
import { IOrganizationDataSource } from './types/organization-datasouce.type';

@injectable()
export class OrganizationDataSource implements IOrganizationDataSource {
  async findById(organizationId: string): Promise<Organization | null> {
    return OrganizationModel.findById(organizationId);
  }

  async create(payload: Omit<Organization, '_id'>): Promise<Organization> {
    return OrganizationModel.create(payload);
  }

  async updateOne(organizationId: string, payload: Partial<Organization>) {
    return OrganizationModel.updateOne({ _id: organizationId }, payload);
  }
}

import { injectable } from 'inversify';
import { ObjectId } from 'mongodb';
import { Organization } from '../../entities/organization';
import { IOrganizationDataSource } from '../types/organization-datasouce.type';

export const MOCKED_ORGANIZATION: Organization = {
  _id: new ObjectId().toString(),
  name: 'Cazé Lanches',
  businessSegment: 'lanches mto fodaaa',
  organizationRepresentantId: new ObjectId().toString(),
  locations: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

@injectable()
export class MongoOrganizationDataSource implements IOrganizationDataSource {
  async create(payload: Omit<Organization, '_id'>): Promise<Organization> {
    return {
      _id: new ObjectId().toString(),
      ...payload,
    };
  }

  async findById(organizationId: string): Promise<Organization | null> {
    return {
      ...MOCKED_ORGANIZATION,
      _id: organizationId,
    };
  }

  async updateOne(
    organizationId: string,
    payload: Partial<Organization>
  ): Promise<Organization | null> {
    return {
      ...MOCKED_ORGANIZATION,
      _id: organizationId,
      ...payload,
    };
  }
}

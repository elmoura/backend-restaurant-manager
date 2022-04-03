import { ModelType } from '@typegoose/typegoose/lib/types';
import { injectable } from 'inversify';
import { Organization, OrganizationModel } from '../entities/organization';
import { IOrganizationDataSource } from './types/organization-datasouce.type';

@injectable()
export class MongoOrganizationDataSource implements IOrganizationDataSource {
  private organizationRepository: ModelType<Organization>;

  constructor() {
    this.organizationRepository = OrganizationModel;
  }

  async findById(organizationId: string): Promise<Organization | null> {
    return this.organizationRepository.findById(organizationId);
  }

  async create(payload: Omit<Organization, '_id'>): Promise<Organization> {
    return this.organizationRepository.create(payload);
  }

  async updateOne(
    organizationId: string,
    payload: Partial<Organization>
  ): Promise<Organization | null> {
    return this.organizationRepository.findByIdAndUpdate(
      organizationId,
      payload
    );
  }
}

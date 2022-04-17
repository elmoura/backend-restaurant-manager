import { OrganizationLocation } from '../../../entities/organization-location';

export class CreateOrganizationInput {
  name: string;

  businessSegment: string;

  locations: Omit<OrganizationLocation, '_id'>[];
}

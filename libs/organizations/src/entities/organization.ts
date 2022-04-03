import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { OrganizationLocation } from './organization-location';

export class Organization extends TimeStamps {
  _id?: string;

  @prop()
  name: string;

  @prop()
  organizationRepresentantId?: string;

  @prop({ ref: () => OrganizationLocation })
  locations: Ref<OrganizationLocation>[];
}

export const OrganizationModel = getModelForClass(Organization);

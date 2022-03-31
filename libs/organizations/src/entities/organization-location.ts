import { prop } from '@typegoose/typegoose';

export class OrganizationLocation {
  _id?: string;

  @prop()
  locationName: string;

  @prop()
  city: string;

  @prop()
  state: string;

  @prop()
  neighborhood: string;

  @prop()
  street: string;

  @prop()
  number: string;

  @prop()
  complement: string;
}

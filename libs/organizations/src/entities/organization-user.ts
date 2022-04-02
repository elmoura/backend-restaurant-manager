import { getModelForClass, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class OrganizationUser extends TimeStamps {
  _id?: string;

  @prop()
  organizationId: string;

  @prop()
  firstName: string;

  @prop()
  lastName: string;

  @prop()
  phoneNumber: string;

  @prop()
  email: string;

  @prop()
  password: string;
}

export const OrganizationUserModel = getModelForClass(OrganizationUser);

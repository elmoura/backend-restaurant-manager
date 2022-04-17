import { getModelForClass, prop } from '@typegoose/typegoose';

export class Category {
  _id?: string;

  @prop()
  name: string;

  @prop()
  description: string;
}

export const CategoryModel = getModelForClass(Category);

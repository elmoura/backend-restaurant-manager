import { IPaginationOptions } from '@libs/common';
import { Category } from '../../entities/category';

export interface ICategoryDataSource {
  list(options: IPaginationOptions): Promise<Category[]>;
  createOne(payload: Omit<Category, '_id'>): Promise<Category>;
  updateOne(
    categoryId: string,
    payload: Partial<Category>
  ): Promise<Category | null>;
}

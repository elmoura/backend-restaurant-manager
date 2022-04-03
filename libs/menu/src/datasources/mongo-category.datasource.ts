import { injectable } from 'inversify';
import { IPaginationOptions } from '@libs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Category, CategoryModel } from '../entities/category';
import { ICategoryDataSource } from './types/category-datasource.type';

@injectable()
export class MongoCategoryDataSource implements ICategoryDataSource {
  private categoryRepository: ModelType<Category>;

  constructor() {
    this.categoryRepository = CategoryModel;
  }

  async createOne(payload: Omit<Category, '_id'>): Promise<Category> {
    return this.categoryRepository.create(payload);
  }

  async list({ limit, offset }: IPaginationOptions): Promise<Category[]> {
    return this.categoryRepository.find().skip(offset).limit(limit);
  }

  async updateOne(
    categoryId: string,
    payload: Partial<Category>
  ): Promise<Category | null> {
    return this.categoryRepository.findByIdAndUpdate(categoryId, payload);
  }
}

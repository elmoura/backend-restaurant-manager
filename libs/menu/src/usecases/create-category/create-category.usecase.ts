import { IBaseUseCase } from '@libs/common';
import { Category } from '../../entities/category';
import { CreateCategoryDto } from './dto/create-category.dto';

export class CreateCategoryUseCase
  implements IBaseUseCase<CreateCategoryDto, Category>
{
  execute(input: CreateCategoryDto): Promise<Category> {}
}

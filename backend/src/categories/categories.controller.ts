import { Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  @Get()
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }
}

@Controller('getcategory')
export class OneCategoryController {
  constructor(private categoryService: CategoriesService) {}
  @Get('/:namecategory')
  getcategory(@Param('namecategory') namecategory: string) {
    return this.categoryService.getProductsFromCategories(namecategory);
  }
}

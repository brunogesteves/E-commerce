import { Module } from '@nestjs/common';
import {
  CategoriesController,
  OneCategoryController,
} from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController, OneCategoryController],
  providers: [CategoriesService],
})
export class CategoriesModule {}

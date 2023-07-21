import { Module } from '@nestjs/common';
import {
  CartController,
  AddFavouriteController,
  ProductsController,
  SearchProductsController,
  GetFavouritesController,
  DeleteFavouriteController,
} from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [
    ProductsController,
    CartController,
    AddFavouriteController,
    GetFavouritesController,
    SearchProductsController,
    DeleteFavouriteController,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}

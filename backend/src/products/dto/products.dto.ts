import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CartProductsDto {
  [x: string]: any;
  @IsNumber()
  @IsNotEmpty()
  @IsArray()
  id: number[];

  @IsNumber()
  @IsNotEmpty()
  email: string;
}

export class FavouritesProductsDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  email: string;
}

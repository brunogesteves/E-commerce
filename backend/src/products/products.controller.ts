import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CartProductsDto, FavouritesProductsDto } from './dto';

@Controller('homeProducts')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getallProducts() {
    return this.productsService.getHomeProducts();
  }
}

@Controller('cart')
export class CartController {
  constructor(private productsService: ProductsService) {}

  @Post()
  getCartProducts(@Body() dto: CartProductsDto) {
    return this.productsService.getCartProducts(dto);
  }
}

@Controller('addfavourite')
export class AddFavouriteController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addFavourites(@Body() dto: FavouritesProductsDto) {
    return this.productsService.addFavouriteProduct(dto);
  }
}

@Controller('deletefavourite')
export class DeleteFavouriteController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addFavourites(@Body() dto: FavouritesProductsDto) {
    return this.productsService.deleteFavouriteProduct(dto);
  }
}

@Controller('getfavourites')
export class GetFavouritesController {
  constructor(private productsService: ProductsService) {}

  @Get('/:email')
  getFavourites(@Param('email') email: string) {
    return this.productsService.getFavouriteProduct(email);
  }
}

@Controller('searchproducts')
export class SearchProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/:productname')
  getFavourites(@Param('productname') productName: string) {
    return this.productsService.getSearchProducts(productName);
  }
}

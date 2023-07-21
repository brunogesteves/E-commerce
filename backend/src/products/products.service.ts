import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CartProductsDto, FavouritesProductsDto } from './dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getHomeProducts() {
    try {
      const allProducts = await this.prisma.product.findMany({
        take: 6,
      });

      return allProducts;
    } catch (error) {
      console.log(error);
    }
  }

  async getCartProducts(dto: CartProductsDto) {
    try {
      const allProducts = await this.prisma.product.findMany({
        where: {
          id: {
            in: dto.id,
          },
        },
      });

      // const setCartProducts = await this.prisma.user.update({
      //   where: {
      //     email: dto.email,
      //   },
      //   data: {
      //     ca
      //   },
      // });

      return allProducts;
    } catch (error) {
      console.log(error);
    }
  }

  async addFavouriteProduct(dto: FavouritesProductsDto) {
    try {
      const allProducts = await this.prisma.user.update({
        where: {
          email: dto.email,
        },
        data: {
          favourites: {
            connect: {
              id: dto.productId,
            },
          },
        },
      });

      if (allProducts) return true;
    } catch (error) {
      console.log(error);
    }
    return true;
  }

  async deleteFavouriteProduct(dto: FavouritesProductsDto) {
    try {
      const allProducts = await this.prisma.user.update({
        where: {
          email: dto.email,
        },
        data: {
          favourites: {
            disconnect: {
              id: dto.productId,
            },
          },
        },
      });
      if (allProducts) return true;
    } catch (error) {
      console.log(error);
    }
    return true;
  }

  async getFavouriteProduct(email: string) {
    try {
      const selectedProducts = await this.prisma.user.findMany({
        where: {
          email,
        },
        select: {
          favourites: {
            include: {
              favourites: true,
            },
          },
        },
      });

      return selectedProducts[0].favourites;
    } catch (error) {
      console.log(error);
    }
  }

  async getSearchProducts(productName: string) {
    try {
      const allProducts = await this.prisma.product.findMany({
        where: {
          name: {
            contains: productName,
          },
        },
      });

      return allProducts;
    } catch (error) {
      console.log(error);
    }
    return true;
  }
}

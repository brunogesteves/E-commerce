import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async getAllCategories() {
    try {
      const allCategories = await this.prisma.category.findMany({
        select: {
          name: true,
          image: true,
        },
      });
      if (allCategories) return allCategories;
    } catch (error) {}
  }

  async getProductsFromCategories(namecategory: string) {
    try {
      const allProducts = await this.prisma.product.findMany({
        where: {
          category: {
            name: namecategory,
          },
        },
      });

      if (allProducts) return allProducts;
    } catch (error) {}
  }
}

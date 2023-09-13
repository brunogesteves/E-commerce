export interface ProductModelProps {
  id?: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export interface UniqueCategoryContentProps {
  categoryContent: ProductModelProps[];
}

export interface CategoryProps {
  name: string;
  image: string;
}

export interface CategoryListProps {
  categorieslist: CategoryProps[];
}

export interface CategoryPageNameProps {
  params: {
    category?: string;
    product?: string;
  };
}

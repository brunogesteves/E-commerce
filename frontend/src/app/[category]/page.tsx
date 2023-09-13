import { CategoryPageNameProps } from '@/utils/types';

import GetProductList from '@/components/GetProductList';
import {
  fetchCategorieslist,
  fetchUniqueCategoryContent,
} from '@/utils/fetchData';

const CategoryPage: React.FC<CategoryPageNameProps> = async ({ params }) => {
  return (
    <GetProductList
      params={params.category}
      categoryContent={await fetchUniqueCategoryContent({ params })}
      allCategories={await fetchCategorieslist()}
    />
  );
};

export default CategoryPage;

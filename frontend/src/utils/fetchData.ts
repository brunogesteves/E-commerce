import axios from 'axios';
import {
  CategoryPageNameProps,
  CategoryProps,
  ProductModelProps,
} from './types';

export async function fetchCategorieslist() {
  try {
    const categorieslist = axios
      .get('http://localhost:3001/categories')
      .then((res) => {
        console.log(res.data);

        return res.data;
      });

    return categorieslist;
  } catch (error) {
    console.error('erro: ', error);
  }
}

export async function fetchUniqueCategoryContent({
  params,
}: CategoryPageNameProps) {
  try {
    const getContent = axios
      .get(`http://localhost:3001/getcategory/${params.category}`)

      .then((res) => {
        return res.data;
      });

    return getContent;
  } catch (error) {
    console.error('erro: ', error);
  }
}

export async function fetchGetProducts() {
  try {
    const categorieslist = axios
      .get('http://localhost:3001/homeProducts')
      .then((res) => {
        return res.data;
      });

    return categorieslist;
  } catch (error) {}
}

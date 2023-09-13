import FavoritesModel from '@/components/FavoritesModel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { fetchGetProducts } from '@/utils/fetchData';

const FavoritesPage = async () => {
  return (
    <>
      <FavoritesModel content={await fetchGetProducts()} />
    </>
  );
};

export default FavoritesPage;

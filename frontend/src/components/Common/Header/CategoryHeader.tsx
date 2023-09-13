'use client';
import { CategoryListProps } from '@/utils/types';
import Link from 'next/link';
import React from 'react';

const Category: React.FC<CategoryListProps> = ({ categorieslist }) => {
  return (
    <div className='flex w-full cursor-pointer justify-center bg-white  text-xs text-[#706d6b] shadow '>
      {categorieslist
        ?.sort((a, b) => a.name.localeCompare(b.name))
        .map((category, i: number) => {
          return (
            <ul key={i}>
              <li key={i} className='p-2  hover:bg-black hover:text-white'>
                <Link href={`/${category.name?.toLowerCase()}`}>
                  {category.name}
                </Link>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default Category;

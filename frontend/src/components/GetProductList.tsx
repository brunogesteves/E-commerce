'use client';
import { CategoryProps, ProductModelProps } from '@/utils/types';
import React, { useEffect, useState } from 'react';
import ProductModel from './ProductModel';
import Banner from './Common/Banner';
import { AiOutlineDown } from 'react-icons/ai';
import { MdSavedSearch } from 'react-icons/md';

interface CategoryPageProps {
  categoryContent: ProductModelProps[];

  allCategories: CategoryProps[];
  params: string | undefined;
}

const GetProductList: React.FC<CategoryPageProps> = ({
  categoryContent,
  allCategories,
  params,
}) => {
  const [categoryPageContent, setCategoryPageContent] =
    useState<ProductModelProps[]>(categoryContent);

  const [filterOption, setFilterOption] = useState<string>('');
  const [categoryContentFiltered, setCategoryContentFiltered] =
    useState<ProductModelProps[]>();

  useEffect(() => {
    setFilterOption('a-z');
    const az: any = categoryPageContent?.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setCategoryContentFiltered(az);
  }, []);

  function changeFilter(filterOption: string) {
    setFilterOption(filterOption);
    if (filterOption === 'a-z') {
      const az: any = categoryPageContent?.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setCategoryContentFiltered(az);
    } else if (filterOption === 'z-a') {
      const za: any = categoryPageContent?.sort((a, b) =>
        b.name.localeCompare(a.name)
      );

      setCategoryContentFiltered(za);
    } else if (filterOption === 'low-high') {
      const lowTohigh = categoryPageContent?.sort(function (a, b) {
        return a.price - b.price;
      });

      setCategoryContentFiltered(lowTohigh);
    }
    if (filterOption === 'high-low') {
      const highToLow = categoryPageContent?.sort(function (a, b) {
        return b.price - a.price;
      });

      setCategoryContentFiltered(highToLow);
    }
  }

  return (
    <>
      <div className='flex min-h-screen w-full gap-x-5 px-20 py-12'>
        <div className='w-3/12'>
          <ul className='shadow-1xl sticky top-12 text-white'>
            <li className='item w-auto bg-white'>
              <input
                type='checkbox'
                id='faq1'
                className='peer appearance-none'
              />
              <label htmlFor='faq1' className='grow cursor-pointer py-4'>
                <p>Category</p>
              </label>
              <AiOutlineDown size={10} />
              <div className='content w-full'>
                <div className='flex'>
                  <input
                    type='text'
                    className='w-10/12 border-2 border-slate-200 py-2 pl-1 outline-none'
                    placeholder='Search by Category'
                    onChange={(e: any) => console.log(e.target.value)}
                  />
                  <button
                    type='submit'
                    className='flex w-2/12 items-center justify-center bg-orange-500 text-center'
                  >
                    <MdSavedSearch size={20} color='#fff' />
                  </button>
                </div>
                <div className='my-5 flex h-80 flex-col gap-y-3 overflow-y-auto pl-2'>
                  <>
                    {allCategories?.map((category, i: number) => {
                      return (
                        <div key={i}>
                          <input
                            type='checkbox'
                            value={category.name}
                            className='mr-4 '
                          />
                          {category.name}
                        </div>
                      );
                    })}
                  </>
                </div>
              </div>
            </li>
            <li className='item w-auto bg-white'>
              <input
                type='checkbox'
                id='faq2'
                className='peer appearance-none'
              />
              <label htmlFor='faq2' className='grow cursor-pointer py-4'>
                <p>Price</p>
              </label>
              <AiOutlineDown size={10} />
              <div className='content w-full'>
                <div className='my-5 flex h-auto flex-col gap-y-3 overflow-y-auto pl-2'>
                  <div>
                    <input type='checkbox' value={'track1'} className='mr-4 ' />
                    $68 to $659
                  </div>
                  <div>
                    <input type='checkbox' value={'track2'} className='mr-4 ' />
                    $660 to $1014
                  </div>
                  <div>
                    <input type='checkbox' value={'track3'} className='mr-4 ' />
                    $1015 to $1679
                  </div>
                  <div>
                    <input type='checkbox' value={'track4'} className='mr-4 ' />
                    $1680 to $1856
                  </div>
                </div>
              </div>
            </li>
            <li className='item w-auto bg-white'>
              <input
                type='checkbox'
                id='faq3'
                className='peer appearance-none'
              />
              <label htmlFor='faq3' className='grow cursor-pointer py-4'>
                <p>Sort By Products</p>
              </label>
              <AiOutlineDown size={10} />
              <div className='content w-full'>
                <select
                  className='w-full bg-white outline-none'
                  onChange={(e: any) => {
                    changeFilter(e.target.value);
                  }}
                >
                  <option value='a-z'>Name(A-Z)</option>
                  <option value='z-a'>Name(Z-A)</option>
                  <option value='low-high'>Price(Low to High)</option>
                  <option value='high-low'>Price(High to Low)</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div className='w-9/12 flex-col'>
          <Banner />
          <span className='mb-2 text-2xl font-bold uppercase text-orange-500 '>
            {params}
          </span>
          <span className='mb-2 text-2xl lowercase text-orange-500 '>
            {filterOption ? ' - ' : ''} {filterOption}
          </span>
          <div className='flex flex-wrap justify-start gap-2'>
            <>
              {categoryContentFiltered?.map((product) => {
                return (
                  <div key={product.id} className='w-1/4'>
                    <ProductModel
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      quantity={product.quantity}
                    />
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetProductList;

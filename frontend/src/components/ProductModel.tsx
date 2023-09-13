'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import { BsFillTagFill } from 'react-icons/bs';
import { ProductModelProps } from '@/utils/types';
import Link from 'next/link';

const ProductModel: React.FC<ProductModelProps> = ({
  id,
  name,
  image,
  quantity,
  price,
}) => {
  const [favorites, setFavorites] = useState<boolean>(true);
  return (
    <div
      className='flex h-64 flex-col items-center justify-center bg-white p-2 text-center shadow-xl'
      key={id}
    >
      <span className='mb-3 flex w-8 self-end '>
        {favorites ? (
          <AiFillHeart
            size={25}
            color='red'
            onClick={() => setFavorites(!favorites)}
          />
        ) : (
          <AiOutlineHeart
            size={25}
            color='red'
            onClick={() => setFavorites(!favorites)}
          />
        )}
      </span>
      <div className='mb-2 flex w-auto justify-center'>
        <Link href={`product/${name}`}>
          <Image src={image} alt={image} width={100} height={100} />
        </Link>
      </div>
      <span className='mb-1 flex h-12 self-start text-[15px] text-[#555555]'>
        {name}
      </span>
      <span className='flex self-start text-xs text-[#555]'>
        Quantity: {quantity}
      </span>
      <div className='flex w-full items-center justify-between'>
        <div className='flex w-1/2 justify-start '>
          <p className='mr-2 text-xs font-bold text-black'>${price}</p>
          <BsFillTagFill color='#000' />
        </div>
        <div className='flex cursor-pointer items-center justify-center gap-x-1 rounded-lg bg-orange-600 p-1'>
          <AiOutlineShoppingCart color='#fff' />
          <span className='text-xs text-white'>add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default ProductModel;

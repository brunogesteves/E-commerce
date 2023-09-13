import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const LoginCart = () => {
  return (
    <div className='flex w-full items-center justify-evenly'>
      <div className='text-sm text-white'>Login/Sign Up</div>
      <div className='relative flex items-center justify-center gap-x-5'>
        <AiOutlineShoppingCart color='white' size={20} />
        <div className='absolute -top-1 left-3 rounded-full bg-red-500 p-1 text-[7px] text-white'>
          10
        </div>
        <span className='text-white'>My Cart</span>
      </div>
    </div>
  );
};

export default LoginCart;

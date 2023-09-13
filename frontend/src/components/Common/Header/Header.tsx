import Image from 'next/image';
import React from 'react';
import InputHeader from './InputHeader';
import LoginCart from './LoginCart';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex w-full items-center justify-between bg-black p-3'>
      <div className='flex  w-1/3 justify-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logotype' width={45} height={45} />
        </Link>
      </div>
      <div className='flex w-1/3 justify-center'>
        <InputHeader />
      </div>
      <div className='flex  w-1/3 justify-center'>
        <LoginCart />
      </div>
    </div>
  );
};

export default Header;

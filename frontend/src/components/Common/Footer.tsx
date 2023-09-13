import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex w-full items-center justify-center gap-x-5 bg-black py-3'>
      <Image src={'/logo.png'} alt='logo' width={50} height={50} />
      <span className='text-white'>All Rights Reserved</span>
    </div>
  );
};

export default Footer;

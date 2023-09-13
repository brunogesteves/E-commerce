import Image from 'next/image';
import React, { useState } from 'react';

const Banner = () => {
  return (
    <div className='mx-16 my-7 flex w-auto w-full justify-center'>
      <Image src={`/banner.png`} alt='banner' width={500} height={500} />
    </div>
  );
};

export default Banner;

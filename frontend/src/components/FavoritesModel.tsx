import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const FavoritesModel = ({ content }: any) => {
  return (
    <div className='mb-2 flex  min-h-screen w-full flex-col justify-start bg-slate-500'>
      <Link href={`${content[0].name}`} className='w-full'>
        <div className='mb-2 flex items-center justify-between p-3 '>
          <div>
            <Image
              src={content[0].image}
              alt={content[0].image}
              width={50}
              height={50}
            />
          </div>
          <div className=' flex items-center justify-center gap-x-3'>
            <span>{content[0].price}</span>
            <AiOutlineRight size={20} />
          </div>
        </div>
      </Link>
      <Link href={`${content[0].name}`} className='w-full'>
        <div className='mb-2 flex items-center justify-between p-3 '>
          <div>
            <Image
              src={content[0].image}
              alt={content[0].image}
              width={50}
              height={50}
            />
          </div>
          <div className=' flex items-center justify-center gap-x-3'>
            <span>{content[0].price}</span>
            <AiOutlineRight size={20} />
          </div>
        </div>
      </Link>
      <Link href={`${content[0].name}`} className='w-full'>
        <div className='mb-2 flex items-center justify-between p-3 '>
          <div>
            <Image
              src={content[0].image}
              alt={content[0].image}
              width={50}
              height={50}
            />
          </div>
          <div className=' flex items-center justify-center gap-x-3'>
            <span>{content[0].price}</span>
            <AiOutlineRight size={20} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FavoritesModel;

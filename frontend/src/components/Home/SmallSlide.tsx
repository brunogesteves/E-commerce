'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface CategoryProps {
  name: string;
  image: string;
}

interface CategoryListProps {
  categorieslist: CategoryProps[];
}

const SmallSlide: React.FC<CategoryListProps> = ({ categorieslist }) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='relative mt-5 w-full px-28 py-3 shadow '>
      <Slider {...settings} ref={sliderRef}>
        {categorieslist?.map((category, i: number) => {
          return (
            <div
              className='flex flex-col items-center justify-center text-center'
              key={i}
            >
              <div className='flex justify-center'>
                <Image
                  src={category.image}
                  alt='logotype'
                  width={40}
                  height={40}
                />
              </div>
              <p className='text-md mt-1 text-[#555555]'>{category.name}</p>
              <p className='text-sm text-[#888888]'>
                {i}
                {i > 0 ? ' items' : ' item'}
              </p>
            </div>
          );
        })}
      </Slider>
      <div
        className='absolute left-12 top-1/2 -mt-4 ml-5 rounded-full bg-slate-500 p-2'
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <AiOutlineLeft color='#fff' size={20} />
      </div>
      <div
        className='absolute right-12 top-1/2 -mt-4 mr-5 rounded-full bg-slate-500 p-2'
        onClick={() => sliderRef.current?.slickNext()}
      >
        <AiOutlineRight color='#fff' size={20} />
      </div>
    </div>
  );
};

export default SmallSlide;

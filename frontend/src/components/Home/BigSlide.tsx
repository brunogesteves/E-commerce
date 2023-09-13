'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function BigSlide() {
  const sliderRef = useRef<Slider>(null);
  const [allBanners, setAllBanners] = useState<string[]>([
    'b1.jpeg',
    'b2.jpeg',
    'b3.png',
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className=' relative mt-5 w-full shadow'>
      <Slider {...settings} ref={sliderRef} className='w-full'>
        {allBanners.map((banner: string, i: number) => {
          return (
            <div className='h-80' key={i}>
              <Image
                src={`/${banner}`}
                alt='logotype'
                className='h-full w-full'
                width={1000}
                height={1000}
              />
            </div>
          );
        })}
      </Slider>
      <div
        className='absolute left-0 top-1/2 -mt-2 ml-5 rounded-full bg-slate-500 p-2'
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <AiOutlineLeft color='#fff' size={20} />
      </div>
      <div
        className='absolute right-0 top-1/2 -mt-2 mr-5 rounded-full bg-slate-500 p-2'
        onClick={() => sliderRef.current?.slickNext()}
      >
        <AiOutlineRight color='#fff' size={20} />
      </div>
    </div>
  );
}

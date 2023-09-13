'use client';
import { CategoryPageNameProps } from '@/utils/types';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Slider from 'react-slick';

const ProductPage: React.FC<CategoryPageNameProps> = ({ params }) => {
  let sliderRefBig = useRef<Slider>();
  let sliderRefSmall = useRef<Slider>();
  const [changeSliderRefBig, setChangeSliderRefBig] = useState<Slider>();
  const [changeSliderRefSmall, setChangeSliderRefSmall] = useState<Slider>();
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  const [allBanners, setAllBanners] = useState<string[]>([
    'b1.jpeg',
    'b2.jpeg',
    'b3.png',
  ]);

  useEffect(() => {
    sliderRefBig.current = changeSliderRefBig;
  }, [changeSliderRefBig]);

  useEffect(() => {
    sliderRefBig.current = changeSliderRefSmall;
  }, [changeSliderRefSmall]);

  return (
    <main className='flex h-auto w-full justify-between  gap-x-3 px-20 text-white'>
      <div className='mt-5 h-auto w-1/2 '>
        <div className='relative shadow'>
          <Slider
            asNavFor={nav2}
            ref={(slider: any) => {
              setChangeSliderRefBig(slider);
              setNav1(slider);
            }}
            arrows={false}
          >
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
          <div className=' h-full w-full'>
            <div
              className='absolute left-0 top-1/2  ml-5 rounded-full bg-slate-500 p-2 hover:cursor-pointer'
              onClick={() => sliderRefBig.current?.slickPrev()}
            >
              <AiOutlineLeft color='#fff' size={20} />
            </div>
            <div
              className='absolute right-0 top-1/2 -mt-2 mr-5 rounded-full bg-slate-500 p-2 hover:cursor-pointer'
              onClick={() => sliderRefBig.current?.slickNext()}
            >
              <AiOutlineRight color='#fff' size={20} />
            </div>
          </div>
        </div>
        <div className='relative shadow'>
          <Slider
            asNavFor={nav1}
            ref={(slider: any) => {
              setChangeSliderRefSmall(slider);
              setNav2(slider);
            }}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            {allBanners.map((banner: string, i: number) => {
              return (
                <div className='h-20' key={i}>
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
          <div className=' h-full w-full'>
            <div
              className='absolute left-0 top-1/2  ml-5 rounded-full bg-slate-500 p-2 hover:cursor-pointer'
              onClick={() => sliderRefSmall.current?.slickPrev()}
            >
              <AiOutlineLeft color='#fff' size={20} />
            </div>
            <div
              className='absolute right-0 top-1/2 -mt-2 mr-5 rounded-full bg-slate-500 p-2 '
              onClick={() => sliderRefSmall.current?.slickNext()}
            >
              <AiOutlineRight color='#fff' size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 w-1/2 bg-blue-500'>parte 2</div>
    </main>
  );
};

export default ProductPage;

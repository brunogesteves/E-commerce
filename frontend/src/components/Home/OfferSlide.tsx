'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ProductModel from '../ProductModel';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface ListProductProps {
  allProducts: ProductProps[];
}

const OfferSlide: React.FC<ListProductProps> = ({ allProducts }) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: false,
    variableWidth: false,
    variableHeight: true,
  };
  return (
    <div className='relative mt-5 w-full px-28 py-3 '>
      <Slider {...settings} ref={sliderRef}>
        {allProducts?.map((item, i: number) => {
          return (
            <ProductModel
              key={i}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </Slider>
      <div
        className='absolute left-16 top-1/2 -mt-4 ml-5 rounded-full bg-slate-500 p-2'
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <AiOutlineLeft color='#fff' size={20} />
      </div>
      <div
        className='absolute right-16 top-1/2 -mt-4 mr-5 rounded-full bg-slate-500 p-2'
        onClick={() => sliderRef.current?.slickNext()}
      >
        <AiOutlineRight color='#fff' size={20} />
      </div>
    </div>
  );
};

export default OfferSlide;

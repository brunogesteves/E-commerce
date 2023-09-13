import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { BsFillBagCheckFill, BsFillTagFill } from 'react-icons/bs';

const Message = () => {
  return (
    <div className='my-5 flex w-full items-center  justify-around'>
      <div className='flex items-center justify-center gap-x-4'>
        <div className='rounded-full  border-2 border-[#888888] p-5'>
          <FaTruck size={20} fill='gray' />
        </div>
        <span className='text-[#888888]'>Free & Next Day Delivery</span>
      </div>
      <div className='flex items-center justify-center  gap-x-4'>
        <div className='rounded-full  border-2 border-[#888888] p-5'>
          <BsFillBagCheckFill size={20} fill='gray' />
        </div>
        <span className='text-[#888888]'>100% Satisfaction Guarantee</span>
      </div>
      <div className='flex items-center justify-center  gap-x-4'>
        <div className='rounded-full  border-2 border-[#888888] p-5'>
          <BsFillTagFill size={20} fill='gray' />
        </div>
        <span className='text-[#888888]'>Great Daily Discount</span>
      </div>
    </div>
  );
};

export default Message;

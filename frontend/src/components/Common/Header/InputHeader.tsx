import React from 'react';
import { MdSavedSearch } from 'react-icons/md';

const InputHeader = () => {
  return (
    <>
      <input
        type='text'
        placeholder='Search products'
        className='h-8 w-full rounded-l-md bg-white placeholder:pl-2'
      />
      <button className='flex items-center justify-between gap-x-3 rounded-r-md bg-orange-600 px-2 text-white'>
        <MdSavedSearch size={20} />
        Search
      </button>
    </>
  );
};

export default InputHeader;

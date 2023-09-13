import React from 'react';

import Header from '@/components/Common/Header/Header';
import Footer from '@/components/Common/Footer';
import Category from '@/components/Common/Header/CategoryHeader';
import { fetchCategorieslist } from '@/utils/fetchData';

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = async ({ children }) => {
  const categorieslist = await fetchCategorieslist();

  return (
    <main className='flex min-h-screen flex-col items-center justify-start bg-[#f9f9f9]'>
      <Header />
      <Category categorieslist={categorieslist} />
      {children}
      <Footer />
    </main>
  );
};

export default CommonLayout;

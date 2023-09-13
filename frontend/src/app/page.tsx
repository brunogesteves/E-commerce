import BigSlide from '@/components/Home/BigSlide';
import SmallSlide from '@/components/Home/SmallSlide';
import OfferSlide from '@/components/Home/OfferSlide';
import Banner from '@/components/Common/Banner';
import Message from '@/components/Home/Message';
import { fetchCategorieslist, fetchGetProducts } from '@/utils/fetchData';

export default async function Home() {
  return (
    <>
      <BigSlide />
      <SmallSlide categorieslist={await fetchCategorieslist()} />
      <OfferSlide allProducts={await fetchGetProducts()} />
      <Banner />
      <OfferSlide allProducts={await fetchGetProducts()} />
      <Message />
    </>
  );
}

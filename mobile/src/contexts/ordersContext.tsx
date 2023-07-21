import React, { useContext, useEffect, useState } from 'react';

import { OrdersContextProvider } from './OrdersTypes';
import { api } from '../../utils/api';
import { ProductsListProps, ProductsProps } from '../../utils/types';

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ordersId, setOrdersId] = useState<number[]>([]);
  const [favouritesProducts, setFavouritesProducts] = useState<ProductsProps[]>([]);
  const [cartProducts, setCartProducts] = useState<ProductsListProps[]>([]);
  const [total, setTotal] = useState<number>(0);

  function getAllFavourites() {
    api.get('getfavourites/wbartunek0@goo.gl').then((res) => {
      setFavouritesProducts(res.data);
    });
  }

  useEffect(() => {
    getAllFavourites();
  }, []);

  useEffect(() => {
    api.post('cart', { id: ordersId, email: 'wbartunek0@goo.gl' }).then((res) => {
      const cartProductsList: ProductsListProps[] = res.data.map((data: ProductsProps) => {
        return {
          ...data,
          numberItems: 1,
        };
      });
      setCartProducts(cartProductsList);
    });
  }, [ordersId]);

  useEffect(() => {
    setTotal(0);
    cartProducts.forEach((item, index) => {
      if (item.quantity == 0) {
        cartProducts[index].quantity = 1;
        setCartProducts([...cartProducts]);
      }

      setTotal((total) => total + item.price * item.numberItems);
    });
  }, [cartProducts]);

  return (
    <OrdersContextProvider.Provider
      value={{
        ordersId,
        setOrdersId,
        setFavouritesProducts,
        favouritesProducts,
        getAllFavourites,
        cartProducts,
        setCartProducts,
        total,
        setTotal,
      }}
    >
      {children}
    </OrdersContextProvider.Provider>
  );
};

export function useInfo() {
  const useInfo = useContext(OrdersContextProvider);
  return useInfo;
}

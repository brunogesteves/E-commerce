import { createContext } from 'react';

import { OrdersContextTypeProps } from '../../utils/types';

export const OrdersContextProvider = createContext<OrdersContextTypeProps>({
  ordersId: [],
  setOrdersId: () => {},
  favouritesProducts: [],
  setFavouritesProducts: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  total: 0,
  setTotal: () => {},
  getAllFavourites: () => {},
});

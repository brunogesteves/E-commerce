export type RootStackList = {
  Welcome: undefined;
  SignIn: undefined;
  PhoneLogin: undefined;
  VerificationCode: undefined;
  LogIn: undefined;
  Routing: undefined;
  SignUp: undefined;
  UserLogged: undefined;
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Favourite: { refresh: boolean } | undefined;
  Account: undefined;
  ProductDetail: undefined;
  Category: { nameCategory: string } | undefined;
  ProductScreen: { infoProduct: ProductsProps } | { refresh: boolean } | undefined;
  Search: { searchTerm: string } | undefined;
};

export interface OrdersContextTypeProps {
  ordersId: number[];
  setOrdersId: (newState: number[]) => void;
  favouritesProducts: ProductsProps[];
  setFavouritesProducts: (newState: ProductsProps[]) => void;
  cartProducts: ProductsListProps[];
  setCartProducts: (newState: ProductsListProps[]) => void;
  total: number;
  setTotal: (newState: number) => void;
  getAllFavourites: () => void;
}

export interface ProductsProps {
  id: number;
  name: string;
  description: string;
  image: string | undefined;
  quantity: number;
  price: number;
}

export interface ProductsListProps {
  id: number;
  name: string;
  image: string | undefined;
  description: string;
  quantity: number;
  price: number;
  numberItems: number;
}

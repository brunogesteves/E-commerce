import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './src/Routes/Auth.routes';
import StoreRoutes from './src/Routes/Store/store.routes';
import { OrderProvider } from './src/contexts/ordersContext';
import { userLoggedInfo } from './src/contexts/authContext';

function App(): JSX.Element {
  const { userInfo } = userLoggedInfo();

  return (
    <NavigationContainer>
      <OrderProvider>{userInfo ? <StoreRoutes /> : <AuthRoutes />}</OrderProvider>
    </NavigationContainer>
  );
}

export default App;

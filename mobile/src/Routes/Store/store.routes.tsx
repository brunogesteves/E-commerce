import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BuildingStorefrontIcon, LockOpenIcon, UserIcon } from 'react-native-heroicons/solid';
import 'react-native-gesture-handler';

import TabRoutes from './tab.routes';
import WelcomeDrawer from '../../screens/Store/WelcomeDrawer';
import AccountDrawer from '../../screens/Store/AccountDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <WelcomeDrawer {...props} />}
    >
      <Drawer.Screen
        name="Store"
        component={TabRoutes}
        options={{
          drawerIcon: ({ focused }) => {
            return <BuildingStorefrontIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          drawerActiveTintColor: '#53B175',
          drawerLabel: 'Store',
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountDrawer}
        options={{
          drawerIcon: ({ focused }) => {
            return <UserIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },

          drawerActiveTintColor: '#53B175',
          drawerLabel: 'Account',
        }}
      />
    </Drawer.Navigator>
  );
}

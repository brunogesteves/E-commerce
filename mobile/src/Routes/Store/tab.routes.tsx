import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackList } from '../../../utils/types';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  BuildingStorefrontIcon,
} from 'react-native-heroicons/solid';

import Home from '../../screens/Store/Home';
import Explore from '../../screens/Store/Explore';
import ProductScreen from '../../screens/Store/ProductScreen';
import Cart from '../../screens/Store/Cart';
import Favourite from '../../screens/Store/Favourite';
import Account from '../../screens/Store/Account';
import { useInfo } from '../../contexts/ordersContext';
import Search from '../../screens/Store/Search';
import Category from '../../screens/Store/Category';

const Tab = createBottomTabNavigator<RootStackList>();

export default function TabRoutes() {
  const { ordersId } = useInfo();
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <BuildingStorefrontIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MagnifyingGlassIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MagnifyingGlassIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: '#000',
          tabBarItemStyle: { display: 'none' },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return <ShoppingCartIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: '#000',
          tabBarBadge: ordersId.length,
          tabBarBadgeStyle: { backgroundColor: '#53B175', color: '#fff' },
        }}
      />
      <Tab.Screen
        initialParams={{ refresh: true }}
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HeartIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: '#000',
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => {
            return <UserIcon size={20} stroke={focused ? '#53B175' : '#000'} />;
          },
          tabBarActiveTintColor: '#53B175',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        initialParams={{ refresh: true }}
        name="ProductScreen"
        component={ProductScreen}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}

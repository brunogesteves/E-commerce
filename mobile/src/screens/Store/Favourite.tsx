import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { Bars3Icon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ProductsProps, RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useInfo } from '../../contexts/ordersContext';
import { api } from '../../../utils/api';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Favourite'>;

const Favourite: React.FC<ProfileProps> = ({ route }) => {
  const { setOrdersId, ordersId, favouritesProducts } = useInfo();

  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

  function addAllToCart() {
    const itemsList: number[] = [];
    favouritesProducts.forEach((item) => {
      itemsList.push(item.id);
    });
    setOrdersId(itemsList);
  }

  return (
    <SafeAreaView className=" flex-1 bg-white px-3">
      <View className="flex flex-row  justify-center items-center">
        <View className="w-1/3">
          <Bars3Icon
            color="#000"
            size={20}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <View className=" w-2/3 justify-start">
          <Text className=" font-bold text-black my-5">Favourites</Text>
        </View>
      </View>
      {favouritesProducts.length == 0 ? (
        <Text className=" flex self-center font-bold text-black mb-1">No Results</Text>
      ) : null}
      <ScrollView className="gap-y-3  h-4/5">
        {favouritesProducts?.map((item, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => navigation.navigate('ProductScreen', { infoProduct: item })}
            >
              <View className="border-b-[1px] flex flex-row justify-between border-[#E2E2E2] w-full">
                <View className="flex items-center justify-center flex-row  w-1/2 my-2">
                  <View className="w-1/3">
                    <Image source={{ uri: item.image }} className="w-12 h-10 flex self-center " />
                  </View>
                  <View className="flex items-start w-2/3 ">
                    <Text className="font-bold text-black ">{item.name}</Text>
                    <Text className="text-xs">{item.quantity}pcs, Priceg</Text>
                  </View>
                </View>
                <View className="flex flex-row-reverse justify-start items-center w-1/2 ">
                  <View className=" w-5">
                    {!ordersId.includes(item.id) ? (
                      <ShoppingCartIcon
                        color="#53B175"
                        size={20}
                        onPress={() => setOrdersId([...ordersId, item.id])}
                      />
                    ) : (
                      ''
                    )}
                  </View>
                  <Text className="font-extrabold text-black mb-1 mr-3">${item.price}</Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
      <Pressable
        className="bg-[#53B175] rounded-xl m-3 flex justify-center flex-row"
        onPress={() => addAllToCart()}
      >
        <Text className="text-white py-3">Add All to Cart</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Favourite;

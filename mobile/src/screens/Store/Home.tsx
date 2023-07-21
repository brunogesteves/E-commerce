import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, ScrollView } from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/solid';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

import ProductModel from '../../components/productModel';
import { api } from '../../../utils/api';
import SearchInput from '../../components/SearchInput';
import { RootStackList } from '../../../utils/types';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Home'>;

const Home: React.FC<ProfileProps> = (props) => {
  const [homeProducts, setHomeProducts] = useState([
    {
      id: 0,
      name: '',
      image: '',
      description: '',
      quantity: 0,
      price: 0,
    },
  ]);
  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

  useEffect(() => {
    api.get('homeProducts').then((res) => setHomeProducts(res.data));
  }, []);
  return (
    <>
      <View className="mx-5 mb-1 pt-5 flex items-center">
        <View className="flex flex-row  justify-center items-start">
          <View className="w-1/3">
            <Bars3Icon
              color="#000"
              size={20}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          </View>
          <View className="w-2/3">
            <Image source={require('../../../assets/logo.png')} className="w-24 h-24" />
          </View>
        </View>
      </View>
      <View className="px-3 mt-4">
        <SearchInput />
        <ScrollView className="mb-[164px] ">
          <View className="mt-4 flex flex-row items-center justify-between">
            <Text className="text-black font-bold text-xl">Exclusive Offer</Text>
            <Pressable>
              <Text className="text-[#53B175]">See all</Text>
            </Pressable>
          </View>
          <View className="flex flex-row my-4  justify-between  gap-x-0">
            <ProductModel
              name={homeProducts[0]?.name}
              quantity={homeProducts[0]?.quantity}
              price={homeProducts[0]?.price}
              id={homeProducts[0]?.id}
              image={homeProducts[0]?.image}
              description={homeProducts[0]?.description}
            />
            <ProductModel
              name={homeProducts[1]?.name}
              quantity={homeProducts[1]?.quantity}
              price={homeProducts[1]?.price}
              id={homeProducts[1]?.id}
              image={homeProducts[1]?.image}
              description={homeProducts[1]?.description}
            />
          </View>
          <View className="mt-4 flex flex-row items-center justify-between">
            <Text className="text-black font-bold text-xl">Best Selling</Text>
            <Pressable>
              <Text className="text-[#53B175]">See all</Text>
            </Pressable>
          </View>
          <View className="flex flex-row my-4  justify-between  gap-x-0">
            <ProductModel
              name={homeProducts[2]?.name}
              quantity={homeProducts[2]?.quantity}
              price={homeProducts[2]?.price}
              id={homeProducts[2]?.id}
              image={homeProducts[2]?.image}
              description={homeProducts[2]?.description}
            />
            <ProductModel
              name={homeProducts[3]?.name}
              quantity={homeProducts[3]?.quantity}
              price={homeProducts[3]?.price}
              id={homeProducts[3]?.id}
              image={homeProducts[3]?.image}
              description={homeProducts[3]?.description}
            />
          </View>
          <View className="mt-4 flex flex-row items-center justify-between">
            <Text className="text-black font-bold text-xl">Best Selling</Text>
            <Pressable>
              <Text className="text-[#53B175]">See all</Text>
            </Pressable>
          </View>
          <View className="flex flex-row my-4  justify-between  gap-x-0">
            <ProductModel
              name={homeProducts[4]?.name}
              quantity={homeProducts[4]?.quantity}
              price={homeProducts[4]?.price}
              id={homeProducts[4]?.id}
              image={homeProducts[4]?.image}
              description={homeProducts[4]?.description}
            />
            <ProductModel
              name={homeProducts[5]?.name}
              quantity={homeProducts[5]?.quantity}
              price={homeProducts[5]?.price}
              id={homeProducts[5]?.id}
              image={homeProducts[5]?.image}
              description={homeProducts[5]?.description}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ProductsProps, RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useInfo } from '../../contexts/ordersContext';
import { api } from '../../..//utils/api';
import SearchInput from '../../components/SearchInput';

type SearchProps = NativeStackScreenProps<RootStackList, 'Search'>;

const Search: React.FC<SearchProps> = ({ route }) => {
  const { setOrdersId, ordersId } = useInfo();
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

  useEffect(() => {
    if (route.params?.searchTerm) {
      api.get(`searchproducts/${route.params?.searchTerm}`).then((res) => {
        setProducts(res.data);
      });
    }
  }, [route]);

  return (
    <SafeAreaView className=" flex-1 bg-white px-3">
      <View className="">
        <Text className="text-center font-bold text-black py-5 mb-5 border-b-[0.3px] ">Search</Text>
      </View>
      <SearchInput />

      {products ? (
        <ScrollView className="gap-y-3 mt-1">
          {products?.map((item, i) => {
            return (
              <Pressable
                onPress={() => navigation.navigate('ProductScreen', { infoProduct: item })}
              >
                <View className="border-b-[1px] py-2 bg-slate-200 border-[#E2E2E2] h-auto" key={i}>
                  <View className="flex items-center justify-center my-4">
                    <Image source={{ uri: item.image }} className="w-14 h-14 flex self-center " />
                    <Text className="font-bold text-xl text-black my-2">{item.name}</Text>
                    <Text className="text-lg">{item.quantity}pcs, Priceg</Text>
                  </View>
                  <View className="flex justify-center items-center ">
                    <Text className="font-extrabold text-black text-xl">${item.price}</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      ) : (
        <View>
          <Text>No Results</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;

import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { AdjustmentsHorizontalIcon, ChevronLeftIcon } from 'react-native-heroicons/solid';

import ProductModel from '../../components/productModel';

import { ProductsProps, RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../../utils/api';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Category'>;

const Category: React.FC<any> = (props) => {
  const navigation = useNavigation();
  const [categoryName, setCategoryName] = useState<string>();
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    setCategoryName(props.route.params.nameCategory);
  }, []);

  useEffect(() => {
    api.get(`getcategory/${categoryName}`).then((res) => {
      setProducts(res.data);
    });
  }, [categoryName]);

  return (
    <SafeAreaView className="px-3 bg-white flex-1">
      <View className="flex flex-row justify-between items-center">
        <ChevronLeftIcon color={'#000'} onPress={() => navigation.goBack()} />
        <Text className="text-center font-bold text-black my-5 text-xl">{categoryName}</Text>
        <AdjustmentsHorizontalIcon color={'#000'} />
      </View>
      <View className="px-3 relative">
        <ScrollView className="mb-[164px] ">
          <View className="flex flex-row my-4  justify-between flex-wrap">
            {products?.map((product, i) => {
              return (
                <ProductModel
                  key={i}
                  name={product.name}
                  quantity={product.quantity}
                  price={product.price}
                  id={product.id}
                  image={product.image}
                  description={product.description}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Category;

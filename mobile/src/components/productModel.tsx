import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { PlusSmallIcon } from 'react-native-heroicons/solid';

import { ProductsProps, RootStackList } from '../../utils/types';
import { useInfo } from '../contexts/ordersContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const ProductModel: React.FC<ProductsProps> = (props) => {
  const { setOrdersId, ordersId } = useInfo();
  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

  return (
    <View className="border-[1px] rounded-lg border-[#E2E2E2] w-[48%] h-40 p-2 flex justify-between mb-4">
      <Pressable onPress={() => navigation.navigate('ProductScreen', { infoProduct: props })}>
        <Image source={{ uri: props.image }} className="w-12 h-10 flex self-center mb-2" />
        <Text className="font-bold text-black mb-1">{props.name}</Text>
        <Text className="text-xs mb-2">{props.quantity}pcs, Priceg</Text>
      </Pressable>
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-black h-9 pt-3">${props.price}</Text>
        {!ordersId.includes(props.id) ? (
          <Pressable className="bg-[#53B175] p-[2px]  flex items-center rounded-xl ">
            <PlusSmallIcon
              color="#fff"
              size={30}
              onPress={() => setOrdersId([...ordersId, props.id])}
            />
          </Pressable>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};
export default ProductModel;

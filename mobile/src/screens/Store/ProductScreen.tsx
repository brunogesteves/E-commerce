import React, { useEffect, useState } from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Text, View, TextInput, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useInfo } from '../../contexts/ordersContext';
import { api } from '../../../utils/api';

// import {styled, useColorScheme} from 'nativewind';

// const StyledView = styled(View);
// const StyledText = styled(Text);

// type ProfileProps = NativeStackScreenProps<RootStackList, 'ProductDetail'>;

const ProductDetail: React.FC<any> = ({ route }) => {
  const [review, setReview] = useState(4);
  // const {colorScheme, toggleColorScheme} = useColorScheme();
  const info = route.params.infoProduct;
  const { setOrdersId, ordersId, favouritesProducts, getAllFavourites } = useInfo();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const navigation = useNavigation();

  function addFavourite(id: number) {
    api.post('addfavourite', { productId: id, email: 'wbartunek0@goo.gl' }).then((res) => {
      if (res.data) getAllFavourites();
    });
  }

  function deleteFavourite(id: number) {
    api.post('deletefavourite', { productId: id, email: 'wbartunek0@goo.gl' }).then((res) => {
      if (res.data) getAllFavourites();
    });
  }
  useEffect(() => {
    if (route.params.refresh) {
      for (let i = 0; i <= favouritesProducts.length; i++) {
        if (favouritesProducts[i]?.id == info.id) {
          setIsFavourite(true);
          break;
        } else {
          setIsFavourite(false);
        }
      }
    }
  }, [route, favouritesProducts]);

  return (
    <SafeAreaView className=" px-3 bg-white h-screen">
      <View className="flex self-start pl-3 pt-3">
        <ChevronLeftIcon size={20} color={'#000'} onPress={() => navigation.goBack()} />
      </View>
      <Image source={{ uri: info.image }} className="w-20 h-20 flex self-center" />

      <View className="w-full px-3 ">
        <View className="flex flex-row justify-between items-center mt-2 ">
          <Text className="text-black text-2xl font-bold mt-1">{info.name}</Text>
          <HeartIcon
            color={isFavourite ? '#53B175' : '#fff'}
            size={20}
            stroke={'#000'}
            onPress={() => {
              isFavourite ? deleteFavourite(info.id) : addFavourite(info.id);
            }}
          />
        </View>
        <Text className="flex self-start w-full text-black">{info.quantity}kg,Piece</Text>
        <Text className="text-black text-xl font-bold my-2">${info.price}</Text>
        <ScrollView className="h-1/2 ">
          <Text className="text-black text-xl font-bold ">Description:</Text>
          <Text className="mt-2 ">{info.description}</Text>

          <View className="flex flex-row justify-between items-center mt-5 ">
            <Text className="text-black text-xl font-bold">Rating</Text>
            <Rating type="star" startingValue={review} ratingCount={5} imageSize={20} readonly />
          </View>
        </ScrollView>
        {!ordersId.includes(info.id) ? (
          <Pressable
            className="bg-[#53B175] rounded-xl w-4/4 elev drop-shadow-xl my-3"
            onPress={() => setOrdersId([...ordersId, info.id])}
          >
            <Text className="text-white text-center py-3 ">Add To The Basket</Text>
          </Pressable>
        ) : (
          <View className="bg-[#F2F3F1] rounded-xl w-4/4 elev drop-shadow-xl my-3">
            <Text className="text-[#53b175] text-center py-3 ">Added To The Basket</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

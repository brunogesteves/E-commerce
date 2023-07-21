import React from 'react';
import { Text, View, SafeAreaView, Image, Pressable } from 'react-native';
import {
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  ChevronRightIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
  IdentificationIcon,
  MapPinIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  TicketIcon,
} from 'react-native-heroicons/solid';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Account'>;

const Account: React.FC<ProfileProps> = (props) => {
  // const Account: React.FC<ProfileProps> = (props) => {
  function option(name: string, icon: React.ReactNode) {
    return (
      <View className=" py-4  mx-3  flex flex-row justify-between items-center border-b-[0.2px]">
        <View className="flex flex-row items-center gap-x-2">
          {icon}
          <Text className="text-black font-bold">{name}</Text>
        </View>
        <View>
          <ChevronRightIcon color="#000" size={12} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <View className=" h-1/6 flex-row gap-x-2 items-center p-4 cccc">
        <View>
          <Image
            source={require('../../../assets/avatar.jpg')}
            className="w-10 h-10 bg-fuchsia-400 rounded-3xl"
          />
        </View>
        <View>
          <View className="flex flex-row items-center gap-x-2">
            <Text className="text-black font-bold">Afsar Hossen</Text>
            <PencilIcon stroke="#53B175" size={10} />
          </View>
          <Text className="text-[#7C7C7C]">Imshuvo97@gmail.com</Text>
        </View>
      </View>
      <View className="h-4/6  flex justify-center">
        {option('Orders', <ShoppingBagIcon stroke="#000" size={12} />)}
        {option('My Details', <IdentificationIcon stroke="#000" size={12} />)}
        {option('Delivery Address', <MapPinIcon stroke="#000" size={12} />)}
        {option('Payment Methods', <CreditCardIcon stroke="#000" size={12} />)}
        {option('Promo Cord', <TicketIcon stroke="#000" size={12} rotation={-45} />)}
        {option('Notifications ', <BellAlertIcon stroke="#000" size={12} />)}
        {option('Help', <QuestionMarkCircleIcon stroke="#000" size={12} />)}
        {option('About ', <ExclamationCircleIcon stroke="#000" size={12} />)}
      </View>
      <View className="h-1/6   flex justify-center">
        <Pressable
          className="bg-[#F2F3F1] rounded-xl m-3 flex justify-center items-center relative"
          // onPress={() => setIsModalVisible(false)}
        >
          <Text className="text-[#53b175] text-center py-3 ">Log Out</Text>
          <View className="absolute left-0 pl-5">
            <ArrowRightOnRectangleIcon stroke="#53B175" size={15} />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Account;

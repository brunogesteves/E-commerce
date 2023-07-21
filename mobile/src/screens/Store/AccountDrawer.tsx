import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, Pressable, TouchableOpacity } from 'react-native';
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  PencilIcon,
  ShoppingBagIcon,
  XCircleIcon,
} from 'react-native-heroicons/solid';
import jwt_decode from 'jwt-decode';

interface AllInfoProps {
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  phone: string;
  identification: string;
  birthDate: string;
}

import { userLoggedInfo } from '../../contexts/authContext';
import { api } from '../../../utils/api';

export default function AccountDrawer() {
  const { userInfo, setUserInfo } = userLoggedInfo();
  const [allInfo, setAllInfo] = useState<AllInfoProps>({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    identification: '',
    birthDate: '',
  });
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const fields = [
    'Orders',
    'My Details',
    'Delivery Address',
    'Payment Methods',
    'Promo Cord',
    'Notifications',
    'Help',
    'About',
  ];

  useEffect(() => {
    if (userInfo) {
      setAllInfo(jwt_decode(userInfo));
    }
  }, [userInfo]);

  function option(name: string, icon: React.ReactNode) {
    return (
      <View className="border-b-[0.2px]">
        <View className=" py-4 mx-3  flex flex-row justify-between items-center ">
          <View className="flex flex-row items-center gap-x-2">
            {icon}
            <Text className="text-black font-bold">{name}</Text>
          </View>
          <View>
            <ChevronDownIcon color="#000" size={12} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <View className=" h-1/6 flex-row gap-x-2 items-center p-4 cccc justify-center">
        <View>
          <View className="flex flex-row items-center gap-x-2">
            <Text className="text-black font-bold">{allInfo?.firstname}</Text>
            <PencilIcon stroke="#53B175" size={10} />
          </View>
          <Text className="text-[#7C7C7C]">{allInfo.email}</Text>
        </View>
      </View>
      {/* teste */}
      {fields.map((field, index) => {
        const results = [
          [''],
          [allInfo.email, allInfo.firstname, allInfo.firstname],
          [allInfo.address],
          [''],
          [''],
          [''],
          [''],
          [''],
          [''],
          [''],
          [''],
          [''],
          [''],
          [''],
        ];

        return (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentIndex(index == currentIndex ? null : index)}
          >
            {option(field, <ShoppingBagIcon stroke="#000" size={12} />)}
            {index == currentIndex && (
              <View className=" flex items-center">
                {results[currentIndex].map((result, i) => {
                  return <Text>{result}</Text>;
                })}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
      {/* teste */}
      <View className="h-1/6  flex justify-center ">
        <Pressable
          className="bg-[#F2F3F1] rounded-xl m-3 mb-0 flex justify-center items-center relative"
          onPress={() => setUserInfo('')}
        >
          <Text className="text-[#53b175] text-center py-3 ">Log Out</Text>
          <View className="absolute left-0 pl-5">
            <ArrowRightOnRectangleIcon stroke="#53B175" size={15} />
          </View>
        </Pressable>
        <Pressable
          className="bg-[#F2F3F1] rounded-xl m-3 mb-0 flex justify-center items-center relative"
          onPress={() => {
            api.delete('deleteaccount', { data: allInfo?.email }).then((res) => {
              if (res.data) {
                console.log('abrir modal confirmando a exclusao');
              }
            });
          }}
        >
          <Text className="text-[#53b175] text-center py-3 ">Delete Account</Text>
          <View className="absolute left-0 pl-5">
            <XCircleIcon stroke="#53B175" size={15} />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { userLoggedInfo } from '../../contexts/authContext';
import jwt_decode from 'jwt-decode';
import { ArrowLeftOnRectangleIcon } from 'react-native-heroicons/solid';

interface WelcomeInfoProps {
  firstname: string;
  lastname: string;
}

export default function WelcomeDrawer(props: any) {
  const { userInfo, setUserInfo } = userLoggedInfo();

  const [welcomeInfo, setWelcomeInfo] = useState<WelcomeInfoProps>();

  useEffect(() => {
    if (userInfo) {
      setWelcomeInfo(jwt_decode(userInfo));
    }
  }, [userInfo]);

  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View className="bg-[#53B175]  py-4 flex items-center justify-start">
        <Image source={require('../../../assets/logo.png')} className="w-20 h-20" />
        <Text className="text-white text-md py-4">
          hello! {welcomeInfo?.firstname} {welcomeInfo?.lastname}
        </Text>
        <Pressable onPress={() => setUserInfo('')} className="flex flex-row  gap-x-3">
          <Text className="text-white text-lg">Sair</Text>
          <ArrowLeftOnRectangleIcon size={30} color={'#fff'} />
        </Pressable>
      </View>
    </View>
  );
}

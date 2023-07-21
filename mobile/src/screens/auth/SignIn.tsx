import React, { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileProps = NativeStackScreenProps<RootStackList, 'SignIn'>;

const SignIn: React.FC<ProfileProps> = (props) => {
  const [phoneResult, setPhoneResult] = useState<string>();
  const [phoneIsValid, setPhoneIsValid] = useState<string>();

  return (
    <View className=" flex-1 bg-white">
      <Image source={require('../../../assets/productsBag.png')} />
      <View className="mx-5 flex-1 mb-1">
        <View className="h-1/2 ">
          <Text className="text-black font-bold mr-36 text-2xl">
            Get your groceries with nectar
          </Text>
          <Pressable
            onPress={() => props.navigation.navigate('PhoneLogin')}
            className="flex flex-row gap-x-2 pb-2 pt-4 border-b-2 border-b-gray-100 w-full  border-black"
          >
            <Text>🇧🇷</Text>
            <Text>+55</Text>
          </Pressable>
        </View>
        <View className="h-1/2 justify-center">
          <Pressable
            className="bg-[#53B175]  w-full rounded-xl flex items-center justify-start flex-row"
            onPress={() => props.navigation.navigate('LogIn')}
          >
            <Image
              source={require('../../../assets/email.png')}
              resizeMode="contain"
              className="h-10 w-10 mx-10"
            />
            <Text className="text-white text-lg w-1/2 text-center ">Email</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

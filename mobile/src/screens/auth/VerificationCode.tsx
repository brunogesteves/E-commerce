import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, TextInput, Pressable } from 'react-native';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from 'react-native-heroicons/solid';

import { getHash, removeListener, startOtpListener, useOtpVerify } from 'react-native-otp-verify';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileProps = NativeStackScreenProps<RootStackList, 'VerificationCode'>;

const VerificationCode: React.FC<ProfileProps> = (props) => {
  const [code, setCode] = useState<string>('');
  const [passwordIsInvisible, setPasswordIsInvisible] = useState<boolean>(true);

  function getOtpCode(message: string) {
    if (message) {
      const optCode = /(\d{4})/g.exec(message)![1];

      setCode(optCode);
    }
  }

  useEffect(() => {
    startOtpListener((message) => getOtpCode(message));
    return () => removeListener();
  }, []);

  useEffect(() => {
    if (code) props.navigation.navigate('LogIn');
  }, [code]);

  return (
    <ImageBackground
      source={require('../../../assets/bgLogin.png')}
      resizeMode="cover"
      className="flex-1 bg-white drop-shadow-2xl"
    >
      <View className="mx-5 flex-1 mb-1 pt-5 ">
        <Pressable onPress={() => props.navigation.navigate('PhoneLogin')}>
          <ChevronLeftIcon color="#000" />
        </Pressable>
        <Text className="text-black font-bold text-xl pt-5 ">Enter your mobile number</Text>
        <Text className="text-[#7C7C7C] text-sd pt-4">Code</Text>
        <View className="border-b-[1px] border-black flex flex-row items-center justify-between ">
          <View className="w-11/12  flex flex-row ">
            <TextInput secureTextEntry={passwordIsInvisible} value={code[0]} />
            <TextInput secureTextEntry={passwordIsInvisible} value={code[1]} />
            <TextInput secureTextEntry={passwordIsInvisible} value={code[2]} />
            <TextInput secureTextEntry={passwordIsInvisible} value={code[3]} />
          </View>
          <Pressable onPress={() => setPasswordIsInvisible(!passwordIsInvisible)}>
            {!passwordIsInvisible ? <EyeSlashIcon color={'#000'} /> : <EyeIcon color={'#000'} />}
          </Pressable>
        </View>
      </View>

      <View className=" flex justify-between mb-3 px-3 flex-row ">
        <Text className="h-10 pt-2">Resend Code</Text>
      </View>
    </ImageBackground>
  );
};

export default VerificationCode;

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import IntlPhoneField from 'react-native-intl-phone-field';
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileProps = NativeStackScreenProps<RootStackList, 'PhoneLogin'>;

const PhoneLogin: React.FC<ProfileProps> = (props) => {
  const [phoneIsValid, setPhoneIsValid] = useState<string>();

  return (
    <ImageBackground
      source={require('../../../assets/bgLogin.png')}
      resizeMode="cover"
      className="flex-1 bg-white drop-shadow-2xl"
    >
      <View className="mx-5 flex-1 mb-1 pt-5 ">
        <ChevronLeftIcon color={'#000'} onPress={() => props.navigation.goBack()} />

        <Text className="text-black font-bold text-xl pt-5 ">Enter your mobile number</Text>
        <Text className="text-[#7C7C7C] text-sd pt-4">Mobile Number</Text>
        <IntlPhoneField
          onValidation={(isValid: string) => setPhoneIsValid(isValid)}
          defaultCountry="BR"
          defaultPrefix="+55 "
          defaultFlag="🇧🇷"
        />
        {phoneIsValid ? (
          <Text className="text-right">Valid</Text>
        ) : (
          <Text className="text-right">Invalid</Text>
        )}
      </View>
      {phoneIsValid ? (
        <View className=" flex items-end flex-1 justify-end mb-3 pr-3">
          <TouchableOpacity
            className="bg-[#53B175] w-10 p-2  flex items-end rounded-3xl"
            onPress={() => props.navigation.navigate('VerificationCode')}
          >
            <ChevronRightIcon color="#fff" />
          </TouchableOpacity>
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default PhoneLogin;

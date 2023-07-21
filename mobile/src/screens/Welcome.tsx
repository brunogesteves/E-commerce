import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';

import { RootStackList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Welcome'>;

const Welcome: React.FC<ProfileProps> = (props) => {
  return (
    <ImageBackground
      source={require('../../assets/bgHome.jpg')}
      resizeMode="cover"
      className="flex-1  "
    >
      <View className="flex-1 "></View>
      <View className="flex-1 flex items-center justify-center opacity-100">
        <Text className="text-white text-4xl font-semibold  text-center">Welcome</Text>
        <Text className="text-white text-4xl font-semibold text-center">to our store</Text>
        <Text className="mt-1 mb-7  text-[#FCFCFC] opacity-70">
          Ger your groceries in as fast as one hour
        </Text>
        <Pressable
          className="bg-[#53B175] rounded-3xl w-3/4 drop-shadow-xl"
          onPress={() => props.navigation.navigate('Routing')}
        >
          <Text className="text-white text-center py-3 ">Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/solid';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { api } from '../../../utils/api';
import SearchInput from '../../components/SearchInput';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Explore'>;

const Explore: React.FC<ProfileProps> = (props) => {
  const [categories, setCategories] = useState([{ name: '', image: '' }]);
  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

  useEffect(() => {
    api.get('categories').then((res) => setCategories(res.data));
  }, []);

  return (
    <SafeAreaView className="px-3 bg-white">
      <View className="flex flex-row  justify-center items-center">
        <View className="w-1/3">
          <Bars3Icon
            color="#000"
            size={20}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <View className=" w-2/3 justify-start">
          <Text className=" font-bold text-black my-5">Find Products</Text>
        </View>
      </View>
      <SearchInput />
      <ScrollView className=" mt-4 h-auto mb-36 bg-white">
        <View className="flex flex-row bg-slate-50 justify-between flex-wrap gap-y-4">
          {categories.map((item, i) => (
            <Pressable
              className={`bg-slate-200  border-[1px] rounded-lg border-slate-500 w-[48%] h-28 p-[4%]`}
              key={i}
              onPress={() => navigation.navigate('Category', { nameCategory: item.name })}
            >
              <Image source={{ uri: item?.image }} className="w-12 h-10 flex self-center mb-2" />
              <Text className="font-bold text-black mb-1 text-center">{item?.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { RootStackList } from '../../utils/types';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const navigation = useNavigation<StackNavigationProp<RootStackList>>();

  return (
    <View className="relative ">
      <TextInput
        className="bg-slate-200 rounded-lg px-10 "
        placeholder="Search Store"
        inlineImageLeft="search_icon"
        returnKeyType="done"
        onChangeText={(e) => setSearchTerm(e)}
        onSubmitEditing={() => {
          navigation.navigate('Search', { searchTerm: searchTerm });
        }}
      />
      <View className="absolute left-5 top-4 ">
        <MagnifyingGlassIcon color={'#000'} size={20} />
      </View>
    </View>
  );
};

export default SearchInput;

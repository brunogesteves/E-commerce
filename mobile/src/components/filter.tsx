import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from 'react-native-check-box';

interface FilterProps {
  isModalVisible: boolean;
  setIsModalVisible: (newState: boolean) => {};
}

interface cats {
  name: string;
  checked: boolean;
}

const Filter: React.FC<FilterProps> = ({isModalVisible, setIsModalVisible}) => {
  const [categories, setCategories] = useState<cats[]>([
    {
      name: 'Fresh Fruits & Vegetable',
      checked: false,
    },
    {
      name: 'Cooking Oil& Ghee',
      checked: false,
    },
    {
      name: 'Meat & Fish',
      checked: false,
    },
    {
      name: 'Meat & Fish',
      checked: false,
    },
  ]);

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      hasBackdrop={false}
      propagateSwipe
      onSwipeComplete={() => setIsModalVisible(false)}
      style={{margin: 0}}>
      <SafeAreaView className=" bg-white flex-1">
        <Text className="text-center font-bold text-black mt-5 mb-10">
          Filters
        </Text>
        <View className="flex-1 justify-between  bg-[#b1b1b1] rounded-tl-xl rounded-tr-xl p-3 gap-y-1">
          <View className="">
            <Text className="text-center font-bold text-black mb-3 text-2xl">
              Categories
            </Text>
            <View className="gap-y-4">
              {categories.map((item, i) => {
                return (
                  <CheckBox
                    key={i}
                    onClick={() => {
                      categories[i].checked = true;
                      setCategories([...categories]);
                    }}
                    isChecked={item.checked}
                    rightText={item.name}
                    rightTextStyle={{color: '#000', fontSize: 15}}
                    checkBoxColor="#c2c2c2"
                    checkedCheckBoxColor="#53b175"
                  />
                );
              })}
            </View>
          </View>
          <View>
            <Text className="text-center font-bold text-black mb-3 text-2xl">
              Brand
            </Text>
            <View className="gap-y-4">
              {categories.map((item, i) => {
                return (
                  <CheckBox
                    key={i}
                    onClick={() => {
                      categories[i].checked = true;
                      setCategories([...categories]);
                    }}
                    isChecked={item.checked}
                    rightText={item.name}
                    rightTextStyle={{color: '#000', fontSize: 15}}
                    checkBoxColor="#c2c2c2"
                    checkedCheckBoxColor="#53b175"
                  />
                );
              })}
            </View>
          </View>
          <Pressable
            className="bg-[#53B175] rounded-xl w-4/4 elev drop-shadow-xl mt-10"
            onPress={() => setIsModalVisible(false)}>
            <Text className="text-white text-center py-3 ">Apply Filter</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Filter;

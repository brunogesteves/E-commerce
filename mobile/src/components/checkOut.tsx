import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRightIcon, XMarkIcon } from 'react-native-heroicons/solid';
import { useInfo } from '../contexts/ordersContext';

interface CheckOutProps {
  isModalVisible: boolean;
  setIsModalVisible: (newState: boolean) => {};
  paymentResult: (newState: boolean) => {};
}

const CheckOut: React.FC<CheckOutProps> = ({
  isModalVisible,
  setIsModalVisible,
  paymentResult,
}) => {
  const { total } = useInfo();

  function optionCheckout(name: string, infoOption: string) {
    return (
      <View className=" h-1/6 m-3  flex flex-row justify-between items-center border-b-[0.2px]">
        <View>
          <Text className="text-[#7C7C7C]">{name}</Text>
        </View>
        <View className="flex flex-row items-center ">
          <Text className="text-black mr-2">{infoOption}</Text>
          <ChevronRightIcon color="#000" size={12} />
        </View>
      </View>
    );
  }
  const randomResult = () => {
    const options = [true, false];
    const random = Math.floor(Math.random() * options.length);

    return options[random];
  };

  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0.7}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onSwipeComplete={() => setIsModalVisible(false)}
      style={{ margin: 0, marginTop: '70%' }}
    >
      <SafeAreaView className=" bg-white flex-1 rounded-tl-xl rounded-tr-xl py-3">
        <View className="flex flex-row justify-between border-b-[0.5px] px-3">
          <Text className="font-bold text-black mb-3 text-2xl ">Checkout</Text>
          <XMarkIcon size={20} color="#000" onPress={() => setIsModalVisible(false)} />
        </View>
        <View className="flex-1 justify-between gap-y-1">
          {optionCheckout('Delivery', 'Select Methods')}
          {optionCheckout('Payment', 'Card')}
          {optionCheckout('Promo Code', 'Pick Discount')}
          {optionCheckout('Total Cost', total.toFixed(2).toString())}
          <Pressable
            className="bg-[#53B175] rounded-xl m-3 flex justify-center items-center"
            onPress={() => {
              setIsModalVisible(false);
              paymentResult(randomResult());
            }}
          >
            <Text className="text-white text-center py-3 ">Pay</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CheckOut;

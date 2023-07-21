import React from 'react';
import { Image } from 'react-native';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OrderProps {
  isModalVisible: boolean;
  setIsModalVisible: (newState: boolean) => {};
}

const FailOrder: React.FC<OrderProps> = ({ isModalVisible, setIsModalVisible }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0.7}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onSwipeComplete={() => setIsModalVisible(false)}
      style={{ margin: 0, marginTop: '30%', marginBottom: '15%' }}
    >
      <SafeAreaView className=" bg-white flex-1 rounded-xl  py-3">
        <View className="h-3/4  flex justify-center items-center px-3">
          <Image source={require('../../assets/order_failed.png')} className="w-44 h-44  mb-2" />
          <Text className="text-black text-xl font-bold mx-20 text-center mb-5">
            Oops! Order Failed
          </Text>
          <Text className="text-[#7C7C7C] text-center mx-20">Something went wrong.</Text>
        </View>
        <View className="h-1/4 flex-1 justify-between gap-y-1">
          <Pressable
            className="bg-[#53B175] rounded-xl m-3 flex justify-center items-center"
            onPress={() => setIsModalVisible(false)}
          >
            <Text className="text-white text-center py-3 ">Please Try Again</Text>
          </Pressable>
          <Pressable
            className="bg-[#53B175] rounded-xl m-3 flex justify-center items-center"
            onPress={() => setIsModalVisible(false)}
          >
            <Text className="text-black text-center py-3 ">Back to Home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default FailOrder;

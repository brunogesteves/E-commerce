import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from 'react-native-heroicons/solid';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CheckOut from '../../components/checkOut';
import SucessfullOrder from '../../components/sucessfullOrder';
import FailOrder from '../../components/failOrder';
import { useInfo } from '../../contexts/ordersContext';
import { DrawerActions } from '@react-navigation/native';

type ProfileProps = NativeStackScreenProps<RootStackList, 'Cart'>;

const Cart: React.FC<ProfileProps> = ({ navigation }) => {
  const { ordersId, setOrdersId, cartProducts, setCartProducts, total } = useInfo();
  const [isCheckoutModalVisible, setIsCheckoutModalVisible] = useState<boolean>(false);
  const [isSucessfullOrderModalVisible, setIsSucessfullOrderModalVisible] =
    useState<boolean>(false);
  const [isFailOrderModalVisible, setIsFailOrderModalVisible] = useState<boolean>(false);

  function paymentStatus(paymentSucess: boolean) {
    paymentSucess ? setIsSucessfullOrderModalVisible(true) : setIsFailOrderModalVisible(true);
  }

  function addDecreaseToCart(i: number, operation: string) {
    if (operation === '+') {
      cartProducts[i].numberItems += 1;
    } else if (operation === '-') {
      cartProducts[i].numberItems -= 1;
    }
    setCartProducts([...cartProducts]);
  }

  function deleteCartProduct(id: number) {
    setOrdersId(ordersId.filter((orderId) => orderId !== id));
    setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== id));
  }

  return (
    <SafeAreaView className=" flex-1 bg-white px-3">
      <View className="flex flex-row  justify-center items-center">
        <View className="w-1/3">
          <Bars3Icon
            color="#000"
            size={20}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <View className=" w-2/3 justify-start">
          <Text className=" font-bold text-black my-5">My Cart</Text>
        </View>
      </View>

      {!cartProducts.length ? (
        <Text className=" flex self-center font-bold text-black mb-1">No Results</Text>
      ) : null}
      <ScrollView className="  gap-y-3 h-4/5">
        {cartProducts.map((item, i) => {
          return (
            <View
              className="border-b-[1px] flex flex-row justify-between border-[#E2E2E2] w-full"
              key={i}
            >
              <Pressable
                className="flex justify-center"
                onPress={() => navigation.navigate('ProductScreen', { infoProduct: item })}
              >
                <Image source={{ uri: item.image }} className="w-12 h-10 flex self-center mb-2" />
              </Pressable>
              <View className="flex items-start mr-20">
                <Text className="font-bold text-black mb-1">{item.name}</Text>
                <Text className="text-xs mb-4">{item.quantity}pcs, Priceg</Text>
                <View className="flex flex-row justify-between items-center">
                  <Pressable className="b p-[2px] flex items-center rounded-xl">
                    <MinusSmallIcon
                      color="#B3B3B3"
                      size={30}
                      onPress={() => addDecreaseToCart(i, '-')}
                    />
                  </Pressable>
                  <Text className="font-bold text-black mb-1 px-5">{item.numberItems}</Text>
                  <Pressable className=" p-[2px] flex items-center rounded-xl">
                    <PlusSmallIcon
                      color="#53B175"
                      size={30}
                      onPress={() => addDecreaseToCart(i, '+')}
                    />
                  </Pressable>
                </View>
              </View>
              <View className="flex justify-between items-center">
                <XMarkIcon color="#B3B3B3" size={20} onPress={() => deleteCartProduct(item.id)} />
                <Text className="font-bold text-black mb-1">${item.price}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Pressable
        className="bg-[#53B175] rounded-xl m-3 flex justify-center flex-row"
        onPress={() => setIsCheckoutModalVisible(true)}
      >
        <View className="w-4/5 flex items-center">
          <Text className="text-white  py-3 ">Go to Checkout</Text>
        </View>
        <View className="w-1/5  flex items-center justify-center ">
          <Text className="text-white bg-[#489e67] px-2 rounded">${total.toFixed(2)}</Text>
        </View>
      </Pressable>
      <CheckOut
        isModalVisible={isCheckoutModalVisible}
        setIsModalVisible={async (e) => setIsCheckoutModalVisible(e)}
        paymentResult={async (e) => paymentStatus(e)}
      />

      <SucessfullOrder
        isModalVisible={isSucessfullOrderModalVisible}
        setIsModalVisible={async (e) => setIsSucessfullOrderModalVisible(e)}
      />
      <FailOrder
        isModalVisible={isFailOrderModalVisible}
        setIsModalVisible={async (e) => setIsFailOrderModalVisible(e)}
      />
    </SafeAreaView>
  );
};

export default Cart;

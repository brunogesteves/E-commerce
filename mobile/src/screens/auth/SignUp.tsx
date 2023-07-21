import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { EyeIcon } from 'react-native-heroicons/solid';
import DatePicker from 'react-native-date-picker';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { SignupSchema } from '../../../utils/yup';
import { api } from '../../../utils/api';
import { userLoggedInfo } from '../../contexts/authContext';

type ProfileProps = NativeStackScreenProps<RootStackList, 'SignUp'>;

const SignUp: React.FC<ProfileProps> = (props) => {
  const { setUserInfo } = userLoggedInfo();
  const [passwordIsInvisible, setPasswordIsInvisible] = useState<boolean>(true);
  const [datebirthModal, setDatebirthModal] = useState<boolean>(false);

  return (
    <ImageBackground
      source={require('../../../assets/bgLogin.png')}
      resizeMode="cover"
      className="flex-1 bg-white"
    >
      <View className="mx-5 pb-1 pt-5 flex items-center ">
        <Image source={require('../../../assets/logo.png')} className="w-24 h-24" />
      </View>
      <KeyboardAvoidingView className="flex-1" behavior="height">
        <ScrollView className="flex-1 px-5 pt-1">
          <Text className="text-black font-bold text-xl mb-2">Sign Up</Text>
          <Text className="text-[#7c7c7c] text-sd mb-9">Enter your credentials to continue</Text>
          <Formik
            initialValues={{
              email: 'admin5@baker.org.br',
              password: 'fA8#s3&qzWV/',
              firstname: 'Robert',
              lastname: 'Saint',
              address: '5 Sin Avenue',
              phone: '246-777-6789',
              identification: '77-553-7405',
              birthDate: '06/06/2022',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              api.post('auth/signup', values).then((res) => {
                setUserInfo(res.data.access_token);
              });
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Text className="text-[#7c7c7c] text-sd">Email</Text>
                  <TextInput
                    onChangeText={handleChange('email')}
                    keyboardType="email-address"
                    value={values.email}
                    onBlur={() => setFieldTouched('email', true)}
                  />
                  {errors.email && touched.email && (
                    <Text className="text-red-500 text-center -mt-2">{errors.email}</Text>
                  )}
                </View>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Text className="text-[#7c7c7c] text-sd">firstName</Text>
                  <TextInput
                    onChangeText={handleChange('firstname')}
                    keyboardType="default"
                    value={values.firstname}
                    onBlur={() => setFieldTouched('firstname', true)}
                  />
                  {errors.firstname && touched.firstname && (
                    <Text className="text-red-500 text-center -mt-2">{errors.firstname}</Text>
                  )}
                </View>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Text className="text-[#7c7c7c] text-sd">Lastname</Text>
                  <TextInput
                    onChangeText={handleChange('lastname')}
                    keyboardType="default"
                    value={values.lastname}
                    onBlur={() => setFieldTouched('lastname', true)}
                  />
                  {errors.lastname && touched.lastname && (
                    <Text className="text-red-500 text-center -mt-2">{errors.lastname}</Text>
                  )}
                </View>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Text className="text-[#7c7c7c] text-sd">phone</Text>
                  <TextInput
                    onChangeText={handleChange('phone')}
                    keyboardType="number-pad"
                    value={values.phone}
                    onBlur={() => setFieldTouched('phone', true)}
                  />
                  {errors.phone && touched.phone && (
                    <Text className="text-red-500 text-center -mt-2">{errors.phone}</Text>
                  )}
                </View>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Text className="text-[#7c7c7c] text-sd">identification</Text>
                  <TextInput
                    onChangeText={handleChange('identification')}
                    keyboardType="default"
                    value={values.identification}
                    onBlur={() => setFieldTouched('identification', true)}
                  />
                  {errors.identification && touched.identification && (
                    <Text className="text-red-500 text-center -mt-2">{errors.identification}</Text>
                  )}
                </View>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Text className="text-[#7c7c7c] text-sd">address</Text>
                  <TextInput
                    onChangeText={handleChange('address')}
                    keyboardType="default"
                    value={values.address}
                    onBlur={() => setFieldTouched('address', true)}
                  />
                  {errors.address && touched.address && (
                    <Text className="text-red-500 text-center -mt-2">{errors.address}</Text>
                  )}
                </View>
                <View className="border-b-[1px] border-black h-14 mb-5">
                  <Pressable
                    className="border-b-[1px] border-black h-14 mb-5 "
                    onPress={() => setDatebirthModal(true)}
                  >
                    <Text className="text-[#7c7c7c] text-sd">dateBirth</Text>
                    <Text>{values.birthDate}</Text>
                    <DatePicker
                      modal
                      open={datebirthModal}
                      onDateChange={() => {
                        handleChange('dateBirth');
                      }}
                      date={new Date()}
                      mode="date"
                      is24hourSource="locale"
                      maximumDate={new Date()}
                      onConfirm={(date) => {
                        values.birthDate = date.toDateString();
                        setFieldTouched('birthDate', true);
                        setDatebirthModal(false);
                      }}
                      onCancel={() => {
                        setDatebirthModal(false);
                      }}
                    />
                  </Pressable>
                  {errors.birthDate && touched.birthDate && (
                    <Text className="text-red-500 text-center -mt-2">{errors.birthDate}</Text>
                  )}
                </View>
                <View className="my-3 h-auto ">
                  <Text className="text-[#7c7c7c] text-sd mb-2 h-auto">Password</Text>
                  <View className="border-b-[1px] border-black flex flex-row items-center justify-between  h-10">
                    <TextInput
                      onChangeText={handleChange('password')}
                      keyboardType="default"
                      secureTextEntry={passwordIsInvisible}
                      value={values.password}
                      onBlur={() => setFieldTouched('password', true)}
                    />

                    <Pressable onPress={() => setPasswordIsInvisible(!passwordIsInvisible)}>
                      <EyeIcon color={'#000'} size={20} />
                    </Pressable>
                  </View>
                  {errors.password && touched.password && (
                    <Text className="text-red-500 text-center my-2">{errors.password}</Text>
                  )}
                </View>

                <Pressable
                  className="bg-[#53B175] rounded-xl w-4/4 drop-shadow-xl mb-5"
                  onPress={handleSubmit}
                >
                  <Text className="text-white text-center py-3 ">Sign Up</Text>
                </Pressable>
              </>
            )}
          </Formik>
          <View className="flex flex-row justify-center gap-x-1 mb-5">
            <Text className="text-[14px] font-bold text-black ">Already have an account?</Text>
            <Pressable onPress={() => props.navigation.navigate('LogIn')}>
              <Text className="text-[14px] text-[#53B175] font-bold ">Sign In</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUp;

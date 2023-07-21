import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, Pressable, Image } from 'react-native';
import { EyeIcon } from 'react-native-heroicons/solid';
import { Formik } from 'formik';

import { RootStackList } from '../../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginSchema } from '../../../utils/yup';
import { api } from '../../../utils/api';
import { userLoggedInfo } from '../../contexts/authContext';

type ProfileProps = NativeStackScreenProps<RootStackList, 'LogIn'>;

const LogIn: React.FC<ProfileProps> = (props) => {
  const [passwordIsInvisible, setPasswordIsInvisible] = useState<boolean>(true);
  const { setUserInfo } = userLoggedInfo();

  return (
    <ImageBackground
      source={require('../../../assets/bgLogin.png')}
      resizeMode="cover"
      className="flex-1 bg-white"
    >
      <View className="mx-5  mb-1 pt-5 flex items-center">
        <Image source={require('../../../assets/logo.png')} className="w-24 h-24" />
      </View>
      <View className="flex-1 px-5">
        <Text className="text-black font-bold text-xl mb-2">Loging</Text>
        <Text className="text-[#7c7c7c] text-sd mb-9">Enter your email and password</Text>
        <Formik
          initialValues={{ email: 'admin5@baker.org.br', password: 'fA8#s3&qzWV/' }}
          onSubmit={(values) => {
            api.post('auth/signin', values).then((res) => {
              setUserInfo(res.data.access_token);
            });
          }}
          validationSchema={LoginSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched, setFieldTouched }) => (
            <>
              <View className="border-b-[1px] border-black h-14 mb-5 ">
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
              <View className="mt-3 h-auto ">
                <Text className="text-[#7c7c7c] text-sd mb-2">Password</Text>
                <View className="border-b-[1px] border-black flex flex-row items-center justify-between  h-10">
                  <TextInput
                    onChangeText={handleChange('password')}
                    keyboardType="default"
                    secureTextEntry={passwordIsInvisible}
                    value={values.password}
                    onBlur={() => setFieldTouched('password', true)}
                    className=" w-11/12"
                  />

                  <Pressable onPress={() => setPasswordIsInvisible(!passwordIsInvisible)}>
                    <EyeIcon color={'#000'} />
                  </Pressable>
                </View>
                {errors.password && touched.password && (
                  <Text className="text-red-500 text-center my-2">{errors.password}</Text>
                )}
              </View>
              <Pressable className="flex self-end">
                <Text className="text-[14px] font-bold text-black my-5">Forgot Password?</Text>
              </Pressable>
              <Pressable
                className="bg-[#53B175] rounded-xl w-4/4 drop-shadow-xl mb-5"
                onPress={handleSubmit}
              >
                <Text className="text-white text-center py-3 ">Log In</Text>
              </Pressable>
            </>
          )}
        </Formik>
        <View className="flex flex-row justify-center gap-x-1">
          <Text className="text-[14px] font-bold text-black ">Don’t have an account?</Text>
          <Pressable onPress={() => props.navigation.push('SignUp')}>
            <Text className="text-[14px] text-[#53B175] font-bold ">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LogIn;

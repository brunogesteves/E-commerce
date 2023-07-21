import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackList } from '../../utils/types';
import SignIn from '../screens/auth/SignIn';
import Welcome from '../screens/Welcome';
import PhoneLogin from '../screens/auth/PhoneLogin';
import VerificationCode from '../screens/auth/VerificationCode';
import LogIn from '../screens/auth/LogIn';
import SignUp from '../screens/auth/SignUp';

export default function AuthRoutes() {
  const Stack = createNativeStackNavigator<RootStackList>();
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{ headerShown: false }} />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

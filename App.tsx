import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserMethod from './screens/onboarding/UserMethod';
import Onboarding from './screens/onboarding/Onboarding';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import ForgotPassword from './screens/auth/forgot-pword/ForgotPassword';
import VerifyInput from './screens/auth/verify-email/VerifyInput';
import Checks from './screens/auth/Checks';
import AccountSuccess from './screens/auth/AccountSuccess';
import VerifyCode from './screens/auth/forgot-pword/VerifyCode';
import SetNewPassword from './screens/auth/forgot-pword/SetNewPassword';
import AuthStack from './navigation/AuthStack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  onboarding: { id: number } | undefined;
  userMethod: {id: number} | undefined;
};

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [fontsLoaded] = useFonts({
    'sf-bold': require('./assets/fonts/sf-pro/sf-bold.otf'),
    'sf-med': require('./assets/fonts/sf-pro/sf-med.otf'),
    'sf-reg': require('./assets/fonts/sf-pro/sf-reg.otf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


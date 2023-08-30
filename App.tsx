import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserMethod from './screens/onboarding/UserMethod';
import Onboarding from './screens/onboarding/Onboarding';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  onboarding: { id: number } | undefined;
  userMethod: {id: number} | undefined;
};

export default function App() {
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
      <Stack.Navigator>
        <Stack.Screen name='onboarding' component={Onboarding} options={{
          headerShown: false,
        }}  />
        <Stack.Screen name='auth-select' component={UserMethod} options={{
          headerShown: false,
        }}  />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack';
import { useContext, useEffect, useState } from 'react';
import AuthContextProvider, { AuthContext } from './context/authContext';
import AuthenticatedStack from './navigation/AuthenticatedStack';
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  onboarding: { id: number } | undefined;
  userMethod: { id: number } | undefined;
  playlist: {id: number} | undefined
};


const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
       {authCtx.token ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

const Root = () => {
  const authCtx = useContext(AuthContext);
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if(storedToken) {
          authCtx.authenticate(storedToken);
        }
        setIsTryingLogin(false)
        await SplashScreen.hideAsync();
      } catch (error) {
        console.log(error)
      }
    }
    fetchToken();
  }, [])

  //wait for the authentication check to complete before renderning the navigation component
  if(isTryingLogin) return null;
 
  return <Navigation />
}

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
    <AuthContextProvider>
      <RootSiblingParent>
        <StatusBar style="auto" />
        <Root />
      </RootSiblingParent>
    </AuthContextProvider>
  );

}


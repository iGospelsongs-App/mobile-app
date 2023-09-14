import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/authenticated/Home';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  )
}

export default AuthenticatedStack
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Authenticated = () => {
  return (
    <Stack.Navigator>
      <Text>Authenticated</Text>
    </Stack.Navigator>
  )
}

export default Authenticated
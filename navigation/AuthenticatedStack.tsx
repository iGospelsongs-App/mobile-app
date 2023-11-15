import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeViewStack from './HomeViewStack';
import Playlist from '../screens/authenticated/Playlist';
import PlayScreen from '../screens/authenticated/PlayScreen';
import ArtistScreen from '../screens/authenticated/ArtistScreen';
import NotificationScreen from '../screens/authenticated/NotificationScreen';

const Stack = createNativeStackNavigator();

const LabelImage = ({image}) => {
  return <Image source={image} style={{width: 25, height: 25}} />
}

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='home-view' component={HomeViewStack} />
      <Stack.Screen name='playlist' component={Playlist} />
      <Stack.Screen name='play-screen' component={PlayScreen} />
      <Stack.Screen name='artist-screen' component={ArtistScreen} /> */}
      <Stack.Screen name='notification-screen' component={NotificationScreen} />
    </Stack.Navigator>
  )
}

export default AuthenticatedStack
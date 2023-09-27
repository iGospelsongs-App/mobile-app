import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/authenticated/Home';
import Library from '../screens/authenticated/Library';
import Explore from '../screens/authenticated/Explore';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import search1 from '../assets/images/search1.png';
import search2 from '../assets/images/search2.png';
import library1 from '../assets/images/library1.png';
import library2 from '../assets/images/library2.png';

const Tab = createBottomTabNavigator();

const LabelImage = ({image}) => {
  return <Image source={image} style={{width: 25, height: 25}} />
}

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#FF375F',
      tabBarInactiveTintColor: '#E5E5EA',
      tabBarItemStyle: {
        paddingBottom: Platform.OS === 'android' && 10,
      },
      tabBarStyle: {
        padding: 15,
        height: Platform.OS === 'android' ? 80 : 100,
        backgroundColor: 'black'
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontFamily: 'sf-reg'
      }
    }}>
      <Tab.Screen name='home' component={Home} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <LabelImage image={home1} /> : <LabelImage image={home2} />
      }} />
      <Tab.Screen name='explore' component={Explore} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <LabelImage image={search1} /> : <LabelImage image={search2} />
      }} />
      <Tab.Screen name='library' component={Library} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <LabelImage image={library1} /> : <LabelImage image={library2} />
      }} />
    </Tab.Navigator>
  )
}

export default AuthenticatedStack
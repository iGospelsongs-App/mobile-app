import { Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/authenticated/Home';
import Library from '../screens/authenticated/Library';
import Explore from '../screens/authenticated/Explore';
import Home1 from '../assets/images/home1.svg';
import Home2 from '../assets/images/home2.svg';
import Search1 from '../assets/images/search1.svg';
import Search2 from '../assets/images/search2.svg';
import Library1 from '../assets/images/library1.svg';
import Library2 from '../assets/images/library2.svg';

const Tab = createBottomTabNavigator();

const HomeViewStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#FF375F',
      tabBarInactiveTintColor: '#E5E5EA',
      tabBarItemStyle: {
        paddingBottom: Platform.OS === 'android' && 8,
      },
      tabBarStyle: {
        padding: 20,
        height: Platform.OS === 'android' ? 70 : 90,
        backgroundColor: 'black',
        borderTopColor: '#2C2C2E',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'sf-reg'
      }
    }}>
      <Tab.Screen name='home' component={Home} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <Home1 width={25} height={25} /> : <Home2 width={25} height={25} />
      }} />
      <Tab.Screen name='explore' component={Explore} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <Search1 width={25} height={25} /> : <Search2 width={25} height={25} />
      }} />
      <Tab.Screen name='library' component={Library} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <Library1 width={25} height={25} /> : <Library2 width={25} height={25} />
      }} />
    </Tab.Navigator>
  )
}

export default HomeViewStack
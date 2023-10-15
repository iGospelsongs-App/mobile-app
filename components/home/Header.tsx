import { Image, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import dp from '../../assets/images/dp.png'
import bell from '../../assets/images/bell.png'
import settings from '../../assets/images/settings.png'
import { AuthContext } from '../../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ProfileProps {
  Biography: string;
  Email: string;
  Fullname: string;
  Message: string;
  Newsletter:true,
  Timestamp: string;
  Username: string;
  id: number;
  user_id: number;
}

const Header = () => {
  const [userProfile, setUserProfile] = useState<ProfileProps>();


  const fetchUserProfile = async () => {
    try{
      const profile = await AsyncStorage.getItem('user_profile')
      if(profile !== null) {
        const parsedProfile = JSON.parse(profile)
        setUserProfile(parsedProfile)
        console.log('OUR PROFILE DATA IS', parsedProfile)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, [])

  return (
    <SafeAreaView style={styles.header}>
    {/* left section */}
    <View style={styles.headerLeft}>
      <View style={styles.imageCont}>
        <Image source={dp} style={styles.dp} />
      </View>
      <View style={styles.nameCont}>
        <Text style={styles.greet}>Good Morning</Text>
        <Text style={styles.name}>{userProfile?.Fullname}</Text>
      </View>
    </View>
    {/* right section  */}
    <View style={styles.headerRight}>
      <Image source={bell} />
      <Image source={settings} style={styles.sett} />
    </View>
  </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18,
        paddingHorizontal: 16,
        marginBottom: Platform.OS === 'android' ? 20 : -10,
    },
    headerLeft: {
        flexDirection: "row",
    },
    headerRight: {
        flexDirection: 'row',
    },
    sett: {
        marginLeft: 16
    },
    dp: {
        width: 35,
        height: 35,
        borderRadius: 50,
      },
      imageCont: {
    
      }, 
      nameCont: {
          paddingLeft: 8
      },
      name: {
          fontSize: 15,
          fontFamily: 'sf-med',
          color: 'white'
      },
      greet: {
          fontSize: 14,
          fontFamily: 'sf-reg',
          color: '#636366'
      },
})
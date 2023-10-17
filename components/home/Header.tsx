import { Image, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import dp from '../../assets/images/dp.png'
import Bell from '../../assets/images/bell.svg'
import Settings from '../../assets/images/settings.svg'
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
  const [greeting, setGreeting] = useState('')

  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }

  const fetchUserProfile = async () => {
    try{
      const profile = await AsyncStorage.getItem('user_profile')
      if(profile !== null) {
        const parsedProfile = JSON.parse(profile)
        setUserProfile(parsedProfile)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserProfile();
    getTimeOfDay();
  }, [])

  return (
    <SafeAreaView style={styles.header}>
    {/* left section */}
    <View style={styles.headerLeft}>
      <View style={styles.imageCont}>
        {/* <Image source={dp} style={styles.dp} /> */}
        <View style={styles.textDpWrapper}>
          <Text style={styles.textDp}>
            {userProfile?.Fullname.slice(0, 1).toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.nameCont}>
        <Text style={styles.greet}>{greeting}</Text>
        <Text style={styles.name}>{userProfile?.Fullname}</Text>
      </View>
    </View>
    {/* right section  */}
    <View style={styles.headerRight}>
      <Bell width={25} height={25} />
      <Settings width={25} height={25} style={styles.sett} />
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
      textDpWrapper: {
        width: 35,
        height: 35,
        backgroundColor: '#E31B54',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textDp: {
        color: 'white',
        fontFamily: 'sf-bold',
        fontSize: 20,
      }
})
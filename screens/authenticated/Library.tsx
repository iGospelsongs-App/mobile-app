import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Library = () => {
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    AsyncStorage.removeItem('user_profile')
    authCtx.logout();
  }

  return (
    <View>
      <Text style={{marginTop: 50}}>Library screen here</Text>
      <Button title='logout' onPress={() => authCtx.logout()} />
    </View>
  )
}

export default Library

const styles = StyleSheet.create({})
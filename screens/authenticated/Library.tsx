import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Library = () => {
  const authCtx = useContext(AuthContext);

  return (
    <View>
      <Text style={{marginTop: 50}}>Library screen here</Text>
      <Button title='logout' onPress={() => authCtx.logout()} />
    </View>
  )
}

export default Library

const styles = StyleSheet.create({})
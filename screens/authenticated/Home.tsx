import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <View>
      <Text style={{marginTop: 50}}>Home screen here</Text>
      <Button title='logout' onPress={() => authCtx.logout()} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
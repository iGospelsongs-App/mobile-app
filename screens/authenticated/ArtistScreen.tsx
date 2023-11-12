import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScrollChangeLayout from '../../components/ScrollChangeLayout'
import hillsong from '../../assets/images/hillsong.png'
import { StatusBar } from 'expo-status-bar';

const ArtistScreen = () => {
  return (
      <ScrollChangeLayout>
          <StatusBar style="light" />
          <ImageBackground source={hillsong} resizeMode="stretch" style={styles.header}></ImageBackground>
          
      </ScrollChangeLayout>
  )
}

export default ArtistScreen

const styles = StyleSheet.create({
    header: {
        height: 445,
        paddingTop: 70,
        paddingHorizontal: 16,
        zIndex: 0,
        paddingBottom: 16,
    },
}) 
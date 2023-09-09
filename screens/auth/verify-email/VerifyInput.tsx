import { StyleSheet, Platform, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '../../../components/ScreenHeader'

const VerifyInput = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <ScreenHeader title='Verify' />  
        </View>
    </SafeAreaView>
  )
}

export default VerifyInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 14,
        marginTop: Platform.OS === 'android' && 20
    },
})
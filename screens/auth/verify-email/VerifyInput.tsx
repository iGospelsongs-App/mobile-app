import { StyleSheet, Platform, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '../../../components/ScreenHeader'
import OtpInput from '../../../components/OtpInput'
import Button1 from '../../../components/Button1'


const VerifyInput = () => {
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const MAX_CODE_LENGTH = 4;

  const handleSubmit = () => {
    console.log('our code is', code)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <ScreenHeader title='Verify' />
        <View style={styles.content}>
          <Text style={styles.info}>A 4-digit code has been sent to your Email</Text>
          <OtpInput
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
          />
          <Text style={styles.info2}>Enter 4-digit code</Text>
          <Button1 title='Proceed' onPress={handleSubmit} ready={pinReady} />
          <Text style={styles.info2}>Didn't recieve code ? <Text style={{ textDecorationLine: 'underline' }}>Resend</Text></Text>
        </View>
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
    content: {
      marginTop: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    info: {
      fontSize: 16,
      fontFamily: 'sf-reg',
      color: 'white',
      textAlign: 'center',
      marginBottom: 16
    },
    info2: {
      fontSize: 14,
      fontFamily: 'sf-reg',
      color: 'white',
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 40
    }
})
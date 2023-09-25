import { StyleSheet, Platform, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '../../../components/ScreenHeader'
import OtpInput from '../../../components/OtpInput'
import Button1 from '../../../components/Button1'
import axios from 'axios'
import FormErrorText from '../../../components/FormErrorText'


const VerifyCode = ({navigation, route}) => {
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const MAX_CODE_LENGTH = 4;

  const URL = 'https://igospelsongs.onrender.com/api/check_otp/'
  const email = route.params

  const formValue = {
    UserOTP: code,
  }

  const valuesToSend = {
    code,
    email
  }

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(URL, formValue)
      setLoading(false)
      setCode('')
      navigation.navigate('set-new-pword', valuesToSend)
    } catch (error) {
      setLoading(false)
      setErrorMessage('Wrong input code')
      console.log(error)
    }
  }

  const handleSubmit = () => {
    if(pinReady) {
      setErrorMessage('')
      setLoading(true);
      handlePostRequest();
    }
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
            error={errorMessage !== ''}
          />
          <FormErrorText errorCondition={errorMessage} position='left' />
          <Text style={styles.info2}>Enter 4-digit code</Text>
          <Button1 title='Proceed' onPress={handleSubmit} ready={pinReady} loading={loading} />
          <Text style={styles.info2}>Didn't recieve code ? <Text style={{ textDecorationLine: 'underline' }}>Resend</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VerifyCode

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
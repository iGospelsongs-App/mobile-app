import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScreenHeader from '../../components/ScreenHeader';
import Button1 from '../../components/Button1';

const Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* screen header section  */}
        <ScreenHeader title="Create Account" />
        <ScrollView style={styles.cover}>
          {/* form section  */}
          <View style={styles.form}>
            {/* full name */}
            <View style={styles.singleForm}>
              <Text style={styles.label}>Full name</Text>
              <TextInput
                enterKeyHint='next'
                autoComplete='email'
                style={styles.input}
                selectionColor={'white'}
                autoCapitalize='none'
              />
            </View>

            {/* username  */}
            <View style={styles.singleForm}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                enterKeyHint='next'
                autoComplete='email'
                style={styles.input}
                selectionColor={'white'}
                autoCapitalize='none'
              />
            </View>

            {/* email */}
            <View style={styles.singleForm}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                enterKeyHint='next'
                autoComplete='email'
                placeholder='olivia@gmail.com'
                placeholderTextColor={'#667085'}
                style={styles.input}
                selectionColor={'white'}
                autoCapitalize='none'
              />
            </View>

            {/* password  */}
            <View style={{marginBottom: 10}}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.singleForm2}>
                <TextInput
                  style={styles.input2}
                  selectionColor={"white"}
                  secureTextEntry={!showPassword}
                  autoCapitalize='none'
                  autoComplete='off'
                />
                <TouchableOpacity
                  style={styles.eye}
                  onPress={togglePasswordVisibility}
                  activeOpacity={0.6}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={22}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* submit button  */}
            <Button1 onPress={() => navigation.navigate('checks')} title="Continue" ready={true} />

            {/* login link */}
            <View>
              <Text style={styles.loginLink}>Already Have an account?
                <Text style={{color: '#FF375F'}} onPress={() => navigation.navigate('login')}> Log in</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  )
}

export default Signup

const styles = StyleSheet.create({
  cover: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 14,
    marginTop: Platform.OS === 'android' && 20
  },
  form: {
    marginTop: 40,
  },
  label: {
    color: 'white',
    fontFamily: 'sf-med',
    fontSize: 16,
    marginBottom: 14
  },
  input: {
    borderColor: '#D0D5DD',
    borderWidth: 1,
    borderRadius: 8,
    height: 55,
    width: '100%',
    color: 'white',
    paddingLeft: 15,
    fontFamily: 'sf-med',
    fontSize: 16
  },
  singleForm: {
    marginBottom: 26
  },
  singleForm2: {
    marginBottom: 26,
    borderRadius: 8,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  eye: {
    paddingRight: 20,
  },
  input2: {
    color: 'white',
    paddingLeft: 15,
    width: '85%',
    height: 55,
    fontFamily: 'sf-med',
    fontSize: 16
  },
  forgot: {
    color: 'white',
    fontFamily: 'sf-med',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'right',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#344054',
    borderRadius: 8
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'sf-med',
    fontSize: 18,
    paddingVertical: 16,

  },
  loginLink: {
    fontSize: 16,
    fontFamily: 'sf-reg',
    color: 'white',
    textAlign: 'center',
    marginTop: 30
}
})
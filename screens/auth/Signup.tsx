import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';

const Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* screen header section  */}
        <View style={styles.header}>
          <MaterialIcons onPress={() => navigation.goBack()} name="arrow-back-ios" size={24} color="white" />
          <Text style={styles.title}>Create Account</Text>
          <View></View>
        </View>
        <ScrollView style={styles.cover}>
          {/* form section  */}
          <View style={styles.form}>
            {/* full name */}
            <View style={styles.singleForm}>
              <Text style={styles.label}>Full name</Text>
              <TextInput
                enterKeyHint='next'
                autoComplete='email'
                placeholder='olivia@gmail.com'
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
                placeholder='olivia@gmail.com'
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
                style={styles.input}
                selectionColor={'white'}
                autoCapitalize='none'
              />
            </View>

            {/* password  */}
            <View>
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

            {/* terms check */}
            <View style={styles.checkField}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.agree}>
                I agree to iGospel songs agreement
              </Text>
            </View>

            {/* submit button  */}
            <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
              <Text style={styles.submitText}>Continue</Text>
            </TouchableOpacity>

            {/* login link */}
            <View>
              <Text style={styles.loginLink}>Already Have an account?
                <Text onPress={() => navigation.navigate('login')}> Log in</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  title: {
    color: 'white',
    fontFamily: 'sf-med',
    fontSize: 18
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
  checkField: {
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    margin: 8,
  },
  agree: {
    color: 'white',
    fontFamily: 'sf-reg',
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    fontFamily: 'sf-reg',
    color: 'white',
    textAlign: 'right',
    marginTop: 20
}
})
import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScreenHeader from '../../components/ScreenHeader';
import Button1 from '../../components/Button1';
import FormErrorText from '../../components/FormErrorText';
import axios from 'axios'
import Toast from 'react-native-root-toast';

const Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  //hide the error toast after 5 seconds
  const removeToast = () => {
    const timer = setTimeout(() => {
      setToastVisible(false)
    }, 3000)

    const removeTimer = () => {
      clearTimeout(timer)
    }

    return { timer, removeTimer };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const URL = 'https://igospelsongs.onrender.com/api/signup/'

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const fieldsValidation = () => {
    let isEmailValid = true;
    let isPasswordValid = true;
    let isfullnameValid = true;
    let isUsernameValid = true;

    if (fullname.trim() === '') {
      setFullnameError('Full name is required')
      isfullnameValid = false;
    } else setFullnameError('')

    if (username.trim() === '') {
      setUsernameError('User name is required')
      isUsernameValid = false;
    } else setUsernameError('')

    if (email.trim() === '') {
      setEmailError('Email is required')
      isEmailValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Invalid Email')
      isEmailValid = false;
    } else {
      setEmailError('')
    }

    if (password.trim() === '') {
      setPasswordError('Password is required')
      isPasswordValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be more than 6 char')
      isPasswordValid = false;
    } else {
      setPasswordError('')
    }

    const isValid = isEmailValid && isPasswordValid && isfullnameValid && isUsernameValid;

    return isValid;
  }

  const handleUsername = (text: string) => {
    setUsername(text)
  }

  const handleFullname = (text: string) => {
    setFullname(text)
  }

  const handleEmail = (text: string) => {
    setEmail(text)
  }

  const handlePassword = (text: string) => {
    setPassword(text)
  }

  const formValue = {
    Fullname: fullname,
    email,
    username,
    password
  }

  const dataToSend = {
    email
  }

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(URL, formValue)
      setLoading(false)
      setUsername('')
      setFullname('')
      setEmail('')
      setPassword('')
      navigation.navigate('verify-email')
    } catch (error) {
      setLoading(false)
      // setErrorMessage(error)
      console.log(error)
      setToastVisible(true)
      removeToast();
    }
  }

  const handleSubmit = () => {
    if (toastVisible) removeToast();
    if (fieldsValidation()) {
      setErrorMessage('')
      setLoading(true)
      handlePostRequest()
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* screen header section  */}
        <ScreenHeader title="Create Account" />
        <ScrollView keyboardShouldPersistTaps="handled" style={styles.cover}>
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
                value={fullname}
                onChangeText={handleFullname}
              />
              <FormErrorText errorCondition={fullnameError} />
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
                value={username}
                onChangeText={handleUsername}
              />
              <FormErrorText errorCondition={usernameError} />
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
                value={email}
                onChangeText={handleEmail}
              />
              <FormErrorText errorCondition={emailError} />
            </View>

            {/* password  */}
            <View style={{ marginBottom: 26 }}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.singleForm2}>
                <TextInput
                  style={styles.input2}
                  selectionColor={"white"}
                  secureTextEntry={!showPassword}
                  autoCapitalize='none'
                  autoComplete='off'
                  value={password}
                  onChangeText={handlePassword}
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
              <FormErrorText errorCondition={passwordError} />
            </View>

            {/* submit button  */}
            <Button1 onPress={handleSubmit} title="Proceed" ready={true} loading={loading} />
            <Toast
              duration={1}
              visible={toastVisible}
              position={50}
              shadow={true}
              hideOnPress={true}
              animation={true}
              backgroundColor='red'
            >
              {errorMessage && errorMessage}
            </Toast>

            {/* login link */}
            <View>
              <Text style={styles.loginLink}>Already Have an account?
                <Text style={{ color: '#FF375F' }} onPress={() => navigation.navigate('login')}> Log in</Text>
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
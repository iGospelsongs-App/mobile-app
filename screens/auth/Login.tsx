import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScreenHeader from '../../components/ScreenHeader';
import Button1 from '../../components/Button1';
import FormErrorText from '../../components/FormErrorText';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const URL = 'https://igospelsongs.onrender.com/api/signin/';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const authCtx = useContext(AuthContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const fieldsValidation = () => {
        let isEmailValid = true;
        let isPasswordValid = true;

        if(email.trim() === '') {
            setEmailError('Email is required')
            isEmailValid = false;
        } else if(!emailPattern.test(email)) {
            setEmailError('Invalid Email')
            isEmailValid = false;
        } else {
            setEmailError('')
        }

        if(password.trim() === '') {
            setPasswordError('Password is required')
            isPasswordValid = false;
        } else if(password.length < 6) {
            setPasswordError('Password must be more than 6 char')
            isPasswordValid = false;
        } else {
            setPasswordError('')
        }

        const isValid = isEmailValid && isPasswordValid;

        return isValid;
    }

    const handleEmail = (text: string) => {
        setErrorMessage('')
        setEmail(text)
    }

    const handlePassword = (text: string) => {
        setErrorMessage('')
        setPassword(text)
    }

    const formValues = {
        email,
        password
    }

    const handlePostRequest = async () => {
        try {
            const response = await axios.post(URL, formValues);
            authCtx.authenticate(response.data.token)
            setLoading(false);
            setEmail('');
            setPassword('');
            console.log(response.data)
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.response.data.Error[0]);
            console.log(error.response.data.Error[0]);
        }
    }

    const handleSubmit = () => {
        if(fieldsValidation()) {
            setErrorMessage('')
            setLoading(true)
            handlePostRequest()
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                {/* screen header section  */}
                <ScreenHeader title="Login" />
                {/* form section  */}
                <View style={styles.form}>
                    <View style={styles.singleForm}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            enterKeyHint='next'
                            autoComplete='email'
                            placeholder='olivia@gmail.com'
                            style={styles.input}
                            selectionColor={'white'}
                            autoCapitalize='none'
                            value={email}
                            onChangeText={handleEmail}
                            keyboardType='email-address'
                        />
                        <FormErrorText errorCondition={emailError} />
                        <FormErrorText errorCondition={errorMessage} />
                    </View>

                    {/* password  */}
                    <View style={{marginBottom: 26}}>
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
                        <FormErrorText errorCondition={errorMessage} />
                    </View>

                    {/* forgot password  */}
                    <Text style={styles.forgot} onPress={() => navigation.navigate('forgot-pword')}>Forgot Password?</Text>

                    {/* submit button  */}
                    <Button1 onPress={handleSubmit} title='Continue' ready={true} loading={loading} />
                    <View>
                        <Text style={styles.loginLink}>Don't have an account?
                            <Text style={{color: '#FF375F'}} onPress={() => navigation.navigate('sign-up')}> Sign up</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

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
        marginBottom: 26,
        textAlign: 'right',
    },
    loginLink: {
        fontSize: 16,
        fontFamily: 'sf-reg',
        color: 'white',
        textAlign: 'center',
        marginTop: 30
    }
})
import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScreenHeader from '../../../components/ScreenHeader';
import Button1 from '../../../components/Button1';
import FormErrorText from '../../../components/FormErrorText';

const SetNewPassword = ({ navigation }) => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password1, setPassword1] = useState<string>('');
    const [password1Error, setPassword1Error] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [password2Error, setPassword2Error] = useState('');
    const [loading, setLoading] = useState(false)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const fieldsValidation = () => {
        let isPassword1Valid = true;
        let isPassword2Valid = true;

        if (password1.trim() === '') {
            setPassword1Error('Password is required')
            isPassword1Valid = false;
        } else if (password1.length < 6) {
            setPassword1Error('Password must be more than 6 char')
            isPassword1Valid = false;
        } else {
            setPassword1Error('')
        }


        if (password2.trim() === '') {
            setPassword2Error('Confirm Password Field is required')
            isPassword2Valid = false;
        } else if (password2.length < 6) {
            setPassword2Error('Password must be more than 6 char')
            isPassword2Valid = false;
        } else {
            setPassword2Error('')
        }

        if(password1 !== password2) {
            setPassword1Error('Passwords do not match')
            setPassword2Error('Passwords do not match')
        }

        const isValid = isPassword1Valid && isPassword2Valid && password1 === password2;

        return isValid;
    }

    const handlePassword1 = (text: string) => {
        setPassword1(text)
    }

    const handlePassword2 = (text: string) => {
        setPassword2(text)
    }

    const handleSubmit = () => {
        if (fieldsValidation()) {
            console.log(password1, password2)
            setLoading(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                {/* screen header section  */}
                <ScreenHeader title="Login" />
                {/* form section  */}
                <View style={styles.form}>
                    <View style={{ marginBottom: 26 }}>
                        <Text style={styles.label}>New Password</Text>
                        <View style={styles.singleForm2}>
                            <TextInput
                                style={styles.input2}
                                selectionColor={"white"}
                                secureTextEntry={!showPassword1}
                                autoCapitalize='none'
                                autoComplete='off'
                                value={password1}
                                onChangeText={handlePassword1}
                                placeholder='●●●●●●'
                                placeholderTextColor={'#667085'}
                            />
                            <TouchableOpacity
                                style={styles.eye}
                                onPress={togglePasswordVisibility1}
                                activeOpacity={0.6}
                            >
                                <Feather
                                    name={showPassword1 ? "eye" : "eye-off"}
                                    size={22}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                        <FormErrorText errorCondition={password1Error} />
                        {!password1Error && <Text style={styles.infoText}>Must be minimum of 8 characters</Text>}
                    </View>

                    {/* password  */}
                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.singleForm2}>
                            <TextInput
                                style={styles.input2}
                                selectionColor={"white"}
                                secureTextEntry={!showPassword2}
                                autoCapitalize='none'
                                autoComplete='off'
                                value={password2}
                                onChangeText={handlePassword2}
                                placeholder='●●●●●●'
                                placeholderTextColor={'#667085'}
                            />
                            <TouchableOpacity
                                style={styles.eye}
                                onPress={togglePasswordVisibility2}
                                activeOpacity={0.6}
                            >
                                <Feather
                                    name={showPassword2 ? "eye" : "eye-off"}
                                    size={22}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                        <FormErrorText errorCondition={password2Error} />
                        {!password2Error && <Text style={styles.infoText}>Should be the same with the password set</Text>}
                    </View>

                    {/* submit button  */}
                    <Button1 onPress={handleSubmit} title='Continue' ready={true} loading={loading} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SetNewPassword

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
    },
    infoText: {
        color: '#667085',
        fontSize: 14,
        fontFamily: 'sf-reg',
        marginTop: 6
    }
})
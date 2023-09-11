import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import ScreenHeader from '../../components/ScreenHeader';
import Button1 from '../../components/Button1';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                {/* screen header section  */}
                <ScreenHeader title="Login" />
                {/* form section  */}
                <View style={styles.form}>
                    <View style={styles.singleForm}>
                        <Text style={styles.label}>Username or Email</Text>
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

                    {/* forgot password  */}
                    <Text style={styles.forgot} onPress={() => navigation.navigate('forgot-pword')}>Forgot Password?</Text>

                    {/* submit button  */}
                    <Button1 onPress={() => {}} title='Continue' ready={false} />

                    <View>
                        <Text style={styles.loginLink}>Don't an account?
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
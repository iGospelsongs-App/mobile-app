import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                {/* screen header section  */}
                <View style={styles.header}>
                    <MaterialIcons onPress={() => navigation.goBack()} name="arrow-back-ios" size={24} color="white" />
                    <Text style={styles.title}>Login</Text>
                    <View></View>
                </View>

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
                            />
                            <TouchableOpacity
                                style={styles.eye}
                                onPress={togglePasswordVisibility}
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
                    <Text style={styles.forgot}>Forgot Password?</Text>

                    {/* submit button  */}
                    <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
                        <Text style={styles.submitText}>Continue</Text>
                    </TouchableOpacity>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        marginBottom: 26,
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
})
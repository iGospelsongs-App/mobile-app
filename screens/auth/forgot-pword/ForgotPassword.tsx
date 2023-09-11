import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Button1 from '../../../components/Button1';

const ForgotPassword = ({ navigation }) => {

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
                        <Text style={styles.label}>Enter your Email</Text>
                        <TextInput
                            enterKeyHint='next'
                            autoComplete='email'
                            placeholder='olivia@gmail.com'
                            style={styles.input}
                            selectionColor={'white'}
                            autoCapitalize='none'
                        />
                    </View>

                    {/* submit button  */}
                    <Button1 onPress={() => {}} title='Continue' ready={false} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword

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
})
import { Image, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import img from '../../assets/images/listen.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';
import Button1 from '../../components/Button1';

const AccountSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.wrapper}>
            <Image source={img} style={styles.img} />
            <Text style={styles.title}>Congratulations</Text>
            <Text style={styles.desc}>Start listening to quality gospel music.</Text>
            <Button1 onPress={() => navigation.navigate('login')} title='Start Listening' ready={true} />
        </View>
    </View>
  )
}

export default AccountSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    wrapper: {
        flex: 1,
        marginTop: Platform.OS === 'android' && 20
    },
    img: {
        width: '100%',
        height: 534,
        marginTop: Platform.OS === 'android' ? -20 : 0,
    },
    title: {
        marginTop: 44,
        color: 'white',
        fontSize: 24,
        fontFamily: 'sf-med',
        textAlign: 'center',
        marginBottom: 10
    },
    desc: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'sf-reg',
        textAlign: 'center',
        marginBottom: 39,
    }
})
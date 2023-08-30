import { View, Text, ImageBackground, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import googleIcon from '../../assets/images/google.png'

const windowHeight = Dimensions.get('window').height;

const UserMethod = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* header   */}
            <View style={styles.headerSection}>
                <ImageBackground
                    source={require('../../assets/images/bg1.png')}
                    style={styles.bgImage}
                >
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0, 0, 0, 0.972)', 'black']}
                        style={styles.grad}
                    />
                    
                    {/* screen contents starts here  */}
                    <View style={styles.content}>
                        <View style={styles.textContent}>
                            <Text style={styles.title}>
                                Discover an unmatched Gospel atmosphere awaiting you in one app.
                            </Text> 
                        </View>
                    </View>
                </ImageBackground>
            </View>

            
            <View style={styles.buttons}>
                {/* continue with google button  */}
                <TouchableOpacity activeOpacity={0.8} style={styles.btn1}>
                    <Image source={googleIcon} />
                    <Text style={styles.btnText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.btn2}>
                    <Text style={styles.btnText2}>Sign up</Text>
                </TouchableOpacity>
            </View>

            {/* login link */}
            <View>
                <Text style={styles.loginLink}>Have an account? 
                    <Text onPress={() => navigation.navigate('login')}>Log in</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    headerSection: {
        height: windowHeight > 700 ? '65%' : '60%',

    },
    bgImage: {
        flex: 1,
        justifyContent: 'flex-end',
        resizeMode: 'cover'
    },
    grad: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 750,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'sf-med',
    },
    content: {
        paddingHorizontal: 16,
    },
    textContent: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 24
    },
    buttons: {
        paddingHorizontal: 16
    },
    btn1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 56,
        paddingHorizontal: 21,
        borderRadius: 8,
        marginBottom: 16
    },
    btn2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#344054',
        width: '100%',
        height: 56,
        borderRadius: 8,
        marginBottom: 30
    },
    btnText: {
        paddingLeft: 48,
        fontSize: 18,
        fontFamily: 'sf-med'
    },
    btnText2: {
        fontSize: 18,
        fontFamily: 'sf-med',
        color: 'white'
    },
    loginLink: {
        fontSize: 16,
        fontFamily: 'sf-reg',
        color: 'white',
        textAlign: 'center'
    }
});

export default UserMethod



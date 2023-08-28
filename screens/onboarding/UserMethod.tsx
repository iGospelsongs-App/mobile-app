import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const UserMethod = () => {
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
                    
                    {/* page contents starts here  */}
                    <View style={styles.content}>
                        <View style={styles.textContent}>
                            <Text style={styles.title}>
                                Discover an unmatched Gospel atmosphere awaiting you in one app.
                            </Text> 
                        </View>
                        
                    </View>

                </ImageBackground>
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
        fontFamily: 'sf-reg',
    },
    content: {
        paddingHorizontal: 16
    },
    textContent: {
        width: '100%',
        justifyContent: 'center'
    },
});

export default UserMethod



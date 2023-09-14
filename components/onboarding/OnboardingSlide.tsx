import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const OnboardingSlide = ({item, data, slideIndex}: any) => {
    const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
          <ImageBackground source={item.image} resizeMode='cover' style={styles.myImg}>
              <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0, 0, 0, 0.972)', 'black']}
                  style={styles.grad}
              />
              <View style={styles.contentWrapper}>
                <View style={styles.line}></View>
                  <View style={styles.textWrapper}>
                      <Text style={styles.title}>
                          {item.title}
                      </Text>
                  </View>

                  {/* if the button is true, show it here  */}
                  {
                      item.btn && (
                          <>
                              <TouchableOpacity onPress={() => navigation.replace('auth-select')} activeOpacity={0.8} style={styles.btnWrapper}>
                                  <Text style={styles.btnText}>Get Started</Text>
                              </TouchableOpacity>
                              <Text style={styles.loginLink}>
                                Have an account? 
                                <Text style={{color: '#FF375F'}} onPress={() => navigation.navigate('login')}>Log in</Text>
                              </Text>
                          </>

                      )
                  }

                  {/* if the indicator is true  */}
                  {
                      item.indicator && (
                          <View style={styles.indicatorWrapper}>
                              {data.map((_: any, index: number) => (
                                  <View
                                      key={index}
                                      style={[
                                          styles.indicator,
                                          slideIndex === index && {
                                              backgroundColor: "white",
                                              width: 13,
                                              height: 13,
                                          },
                                      ]}
                                  />
                              ))}
                          </View>
                      )
                  }
              </View>
          </ImageBackground>
          
    </View>
  )
}

export default OnboardingSlide

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    myImg: {
        height: '100%',
        width,
        flex: 1
    },
    grad: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 350,
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    line: {
        width: 60,
        height: 5,
        backgroundColor: '#cf0608',
    },
    title: {
       color: 'white',
       marginTop: 20,
       textAlign: 'center',
       fontFamily: 'sf-med',
       fontSize: 25,
       height: 100
    },
    textWrapper: {
        width: '60%'
    },
    btnWrapper: {
        backgroundColor: 'white',
        marginTop: 18,
        borderRadius: 6
    },
    btnText: {
        paddingHorizontal: 42,
        paddingVertical: 12,
        fontFamily: 'sf-bold',
        fontSize: 16,
    },
    loginLink: {
        fontSize: 16,
        fontFamily: 'sf-reg',
        color: 'white',
        textAlign: 'center',
        marginTop: 25
    },
    indicator: {
        height: 13,
        width: 13,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 50,
      },
      indicatorWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 30
      }
})
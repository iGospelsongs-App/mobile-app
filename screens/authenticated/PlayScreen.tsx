import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/images/playlist.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Heart from '../../assets/images/heart.svg'
import Menu from '../../assets/images/menu.svg'

const PlayScreen = () => {
    const navigation = useNavigation();
    
  return (
    <ImageBackground source={img} blurRadius={15} resizeMode='cover' style={styles.container}>
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        </SafeAreaView>

          <View style={styles.imgWrapper}>
              <Image source={img} style={styles.img} />
          </View>

          <View style={styles.playlistInfo}>
              <View>
                  <Text style={styles.playTitle}>Adonai</Text>
                  <Text style={styles.playlist}>Victoria Orenze</Text>
              </View>
              <View style={styles.itemInfo}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.heartIcon}>
                      <Heart width={24} height={24} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8} style={styles.menuIcon}>
                      <Menu width={24} height={24} />
                  </TouchableOpacity>
              </View>
              
          </View>
    </ImageBackground>
  )
}

export default PlayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    imgWrapper: {
        alignItems: 'center',
        marginTop: 16
    },
    img: {},
    playTitle: {
        color: 'white',
        fontFamily: 'sf-bold',
        fontSize: 20
    },
    playlist: {
        color: '#F4D6FD',
        fontFamily: 'sf-med',
        fontSize: 14
    },
    playlistInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 41
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      heartIcon: {
        marginRight: 20
      },
      menuIcon: {
        backgroundColor: 'rgba(90, 66, 103, 0.49)',
        padding: 8,
        borderRadius: 50
      }
})
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import img from '../../assets/images/playlist.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Playlist = () => {
  const navigation = useNavigation();
  const [backColor, setBackColor] = useState('transparent');
  const [topPadding, setTopPadding] = useState(50);
  const [height, setHeight] = useState(30)

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // Define the scroll threshold at which you want to change the background color
    const scrollThreshold = 100;

    // Set the new background color based on the scroll position
    if (offsetY > scrollThreshold) {
      setBackColor('#2c2c2c');
      setTopPadding(0);
      setHeight(80);
    } else {
        setBackColor('transparent');
        setTopPadding(50)
        setHeight(30);
    }
  };

  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={[styles.backWrapper, { backgroundColor: backColor, top: topPadding, height: height, paddingBottom: 7 }]}>
              <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
              <ImageBackground source={img} blurRadius={10} resizeMode="cover" style={styles.header}>
                  <View style={styles.imgWrapper}>
                      <Image source={img} style={styles.img} />
                  </View>
              </ImageBackground>

              {/* other contents */}
              <View style={{marginTop: 50}}>
                <Image source={img} style={styles.img} />
                <Image source={img} style={styles.img} />
                <Image source={img} style={styles.img} />
                <Image source={img} style={styles.img} />
              </View>
          </ScrollView>
      </View>
  )
}

export default Playlist

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        position: 'relative'
    },
    wrapper: {
        position: 'relative',
    },
    header: {
        height: 445,
        paddingTop: 70,
        paddingHorizontal: 16,
        zIndex: 0
    },
    back: {
        marginBottom: 10
    },
    backWrapper: {
        width: '100%',
        // height: 40,
        position: 'absolute',
        // top: 48,
        zIndex: 2,
        paddingLeft: 16,
        justifyContent: 'flex-end',
        // paddingBottom: 10
    },
    imgWrapper: {
        alignItems: 'center',
        marginTop: 16
    },
    img: {

    }
})
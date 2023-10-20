import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from '../assets/images/menu.svg'
import { useNavigation } from '@react-navigation/native'

const MusicItem = ({data}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('play-screen')}>
      <>
      <View style={styles.container} >
        <View style={styles.leftWrapper}>
          <Image source={data.image} style={styles.img} />
          <View>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.artist}>{data.artist}</Text>
          </View>
      </View>
      
      <TouchableOpacity activeOpacity={0.8}>
          <Menu width={25} height={25} />
      </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      </>
    </TouchableOpacity>
  )
}

export default MusicItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: { 
        width: 53, 
        height: 53,
        marginRight: 10
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'sf-bold'
    },
    artist: {
        color: '#667085',
        fontSize: 12,
        fontFamily: 'sf-med'
    },
    line: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.21)',
        height: 1,
        // marginTop: 16
      }
})
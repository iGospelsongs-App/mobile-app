import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from '../assets/images/menu.svg'
import { useNavigation } from '@react-navigation/native'

const SermonItem = ({data}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('playlist')} activeOpacity={0.8} style={[styles.cardCover, {
        // width: cardType === cardTypeEnum.ONE ? 137 : 158,
      }]}>
          {/* <Image source={item.image} style={{
            width: cardType === cardTypeEnum.ONE ? 137 : 158,
            height: cardType === cardTypeEnum.ONE ? 137 : 158
          }} />
          <Text style={styles.cardDesc}>{item.title}</Text> */}
      </TouchableOpacity>
  )
}

export default SermonItem

const styles = StyleSheet.create({
    cardCover: {
        marginRight: 16
      },
      cardDesc: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'sf-med',
        marginTop: 12
      },
})
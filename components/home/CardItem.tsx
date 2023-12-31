import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CardItem = ({item}) => {
  const navigation = useNavigation<any>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('playlist')} activeOpacity={0.8} style={styles.cardCover}>
            <Image source={item.image} style={styles.cardImg} />
            <Text style={styles.cardDesc}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({
    cardCover: {
        width: 137,
        marginRight: 16
      },
      cardImg: {
        width: 137, 
        height: 137
      },
      cardDesc: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'sf-med',
        marginTop: 12
      },
})
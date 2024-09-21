import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionHeader from './SectionHeader'
import { useNavigation } from '@react-navigation/native';
import { cardTypeEnum, ItemsSlideListEnum } from '../types';


const CardItem = ({item, cardType}) => {
    const navigation = useNavigation<any>();
      return (
          <TouchableOpacity onPress={() => navigation.navigate('playlist')} activeOpacity={0.8} style={[styles.cardCover, {
            // width: cardType === cardTypeEnum.ONE ? 137 : 158,
            width: cardType === cardTypeEnum.ONE ? 137 : cardType === cardTypeEnum.TWO ? 158 : cardType === cardTypeEnum.THREE ? 234 : 0,
          }]}>
              <Image source={item.image} style={{
                // width: cardType === cardTypeEnum.ONE ? 137 : 158,
                width: cardType === cardTypeEnum.ONE ? 137 : cardType === cardTypeEnum.TWO ? 158 : cardType === cardTypeEnum.THREE ? 234 : 0,
                // height: cardType === cardTypeEnum.ONE ? 137 : 158
                height: cardType === cardTypeEnum.ONE ? 137 : cardType === cardTypeEnum.TWO ? 158 : cardType === cardTypeEnum.THREE ? 151 : 0,
              }} />
              <Text style={styles.cardDesc}>{item.title}</Text>
          </TouchableOpacity>
      )
  }

const ItemsSlideList = ({data, cardType, titleText, color}) => {
    return (
        <View style={{ marginBottom: 67 }}>
            <SectionHeader title={titleText} color={color} />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardItem item={item} cardType={cardType} />}
                horizontal
                bounces={false}
            />
        </View>
    )
}

export default ItemsSlideList

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
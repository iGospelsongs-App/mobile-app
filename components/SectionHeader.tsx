import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SectionHeader = ({color, title}) => {
  return (
    <View style={[styles.wrapper, {
      borderLeftColor: color,
      borderLeftWidth: color ? 5 : 0,
    }]}>
      <View>
        <Text style={styles.txt}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.btnTxt}>See More</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderLeftColor: 'green',
        marginBottom: 18
    },
    txt: {
        color: 'white',
        fontFamily: 'sf-med',
        fontSize: 18,
        paddingLeft: 5
    },
    btnTxt: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'sf-reg',
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    btn: {
        backgroundColor: '#292929',
        borderRadius: 17
    }
})
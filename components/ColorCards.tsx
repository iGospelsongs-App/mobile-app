import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const ColorCards = ({title, colors}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.gradientWrapper}>
            <LinearGradient
                colors={[colors[0], colors[1]]}
                style={styles.grad}
            />
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ColorCards

const styles = StyleSheet.create({
    cardText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'sf-bold',
        position: 'absolute',
        top: '80%', // adjust as needed
        left: '50%', // adjust as needed
        transform: [{ translateX: -50 }, { translateY: -50 }],
        textAlign: 'center'
      },
      gradientWrapper: {
        position: 'relative',
        height: 131,
        flex: 1,
        minWidth: '45%'
      },
      grad: {
        height: 131,
        borderRadius: 8,
        flex: 1
      }
})
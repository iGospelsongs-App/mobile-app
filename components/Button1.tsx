import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button1 = ({title, onPress, ready}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.submitBtn, {
            backgroundColor: ready ? 'white' : '#344054',
        }]}>
            <Text style={[styles.submitText, {
                color: ready ? 'black' : 'white',
            }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button1

const styles = StyleSheet.create({
    submitBtn: {
        width: '100%',
        borderRadius: 8
    },
    submitText: {
        textAlign: 'center',
        fontFamily: 'sf-med',
        fontSize: 18,
        paddingVertical: 16,

    },
})
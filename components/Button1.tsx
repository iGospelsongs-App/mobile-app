import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button1 = ({title, onPress, ready, loading = false, colored = false}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={loading} activeOpacity={0.8} style={[styles.submitBtn, {
            backgroundColor: loading ? '#b3b3b3' : ready ? 'white' : colored ? '#FF375F' : '#344054'
,
        }]}>
            <Text style={[styles.submitText, {
                color: ready ? 'black' : 'white',
            }]}>{loading ? 'Loading...' : title}</Text>
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
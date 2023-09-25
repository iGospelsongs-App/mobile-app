import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormErrorText = ({errorCondition, position='left'}) => {
  if(errorCondition)

  return (
    <Text style={[styles.txt, {textAlign: position === 'left' ? 'left' : 'center'}]}>
      {errorCondition}
    </Text>
  )
}

export default FormErrorText

const styles = StyleSheet.create({
    txt: {
        color: 'red',
        fontSize: 14,
        fontFamily: 'sf-reg',
        marginTop: 10,
    },
})
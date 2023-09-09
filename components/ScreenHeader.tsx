import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ScreenHeader = ({title}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <MaterialIcons onPress={() => navigation.goBack()} name="arrow-back-ios" size={24} color="white" />
            <Text style={styles.title}>{title}</Text>
            <View></View>
        </View>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    title: {
        color: 'white',
        fontFamily: 'sf-med',
        fontSize: 18
    },
})
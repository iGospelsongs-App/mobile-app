import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const ScrollChangeLayout = ({children}) => {
    const [backColor, setBackColor] = useState('transparent');
    const [topPadding, setTopPadding] = useState(50);
    const [height, setHeight] = useState(30);
    const navigation = useNavigation();

    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;

        // Define the scroll threshold at which you want to change the background color
        const scrollThreshold = 100;

        // Set the new background color based on the scroll position
        if (offsetY > scrollThreshold) {
            setBackColor('#1D2939');
            setTopPadding(0);
            setHeight(80);
        } else {
            setBackColor('transparent');
            setTopPadding(50)
            setHeight(30);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7} style={[styles.backWrapper, { 
            backgroundColor: backColor, 
            top: topPadding, 
            height: height, 
            paddingBottom: 7 
          }]}>
              <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
            {children}
          </ScrollView>
        </View>
    )
}

export default ScrollChangeLayout

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        position: 'relative'
    },
    backWrapper: {
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        paddingLeft: 16,
        justifyContent: 'flex-end',
    },
})
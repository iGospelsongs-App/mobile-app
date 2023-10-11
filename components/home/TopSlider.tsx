import { Image, StyleSheet, Dimensions, View, Text } from 'react-native'
import React from 'react'
import newRelease from '../../assets/images/new.png'
import Carousel from 'react-native-reanimated-carousel';


const TopSlider = () => {
    const width = Dimensions.get('window').width;

    return (
        <View>
            <View style={styles.slideSection}>
                <Image source={newRelease} resizeMode='stretch' style={{
                    width: '100%',
                    height: 165
                }} />
            </View>
        </View>
    )
}

export default TopSlider

const styles = StyleSheet.create({
    slideSection: {
        marginTop: 24,
        width: '100%',
        alignItems: 'center',
        height: 168
      },
})
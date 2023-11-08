import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from '../../assets/images/playlist.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Heart from '../../assets/images/heart.svg'
import Menu from '../../assets/images/menu.svg'
import { Slider } from '@react-native-assets/slider'
import { LinearGradient } from 'expo-linear-gradient'
import ShuffleImg from '../../assets/images/shuffle.svg';
import PlayImg from '../../assets/images/play.svg';
import SkipForward from '../../assets/images/skipforward.svg';
import SkipBackward from '../../assets/images/skipback.svg';
import RepeatImg from '../../assets/images/repeat.svg'

const PlayScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={img} blurRadius={15} resizeMode='cover' style={styles.container}>
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.527)', 'rgba(0, 0, 0, 0.7)']}
                style={styles.grad}
            />
            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
            </SafeAreaView>

            <View style={styles.imgWrapper}>
                <Image source={img} style={styles.img} />
            </View>

            <View style={styles.playlistInfo}>
                <View>
                    <Text style={styles.playTitle}>Adonai</Text>
                    <Text style={styles.playlist}>Victoria Orenze</Text>
                </View>
                <View style={styles.itemInfo}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.heartIcon}>
                        <Heart width={24} height={24} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.menuIcon}>
                        <Menu width={24} height={24} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* seek bar */}
            <View style={styles.seekBarWrapper}>
                <Slider
                    value={30}                         // set the current slider's value
                    minimumValue={0}                  // Minimum value
                    maximumValue={100}                  // Maximum value
                    step={0}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
                    minimumTrackTintColor='white'      // The track color before the current value
                    maximumTrackTintColor='rgba(255, 255, 255, 0.29)'      // The track color after the current value
                    thumbTintColor='transparent'         // The color of the slider's thumb
                    thumbStyle={undefined}            // Override the thumb's style
                    trackStyle={undefined}            // Override the tracks' style
                    minTrackStyle={{
                        height: 5
                    }}         // Override the tracks' style for the minimum range
                    maxTrackStyle={{
                        height: 5
                    }}         // Override the tracks' style for the maximum range
                    vertical={false}                  // If true, the slider will be drawn vertically
                    inverted={false}                  // If true, min value will be on the right, and max on the left
                    enabled={true}                    // If false, the slider won't respond to touches anymore
                    trackHeight={4}                   // The track's height in pixel
                    thumbSize={15}                    // The thumb's size in pixel
                    thumbImage={undefined}            // An image that would represent the thumb
                    slideOnTap={true}                 // If true, touching the slider will update it's value. No need to slide the thumb.
                    onValueChange={undefined}         // Called each time the value changed. The type is (value: number) => void
                    onSlidingStart={undefined}        // Called when the slider is pressed. The type is (value: number) => void
                    onSlidingComplete={undefined}     // Called when the press is released. The type is (value: number) => void
                    CustomThumb={undefined}           // Provide your own component to render the thumb. The type is a component: ({ value: number }) => JSX.Element
                    CustomMark={undefined}            // Provide your own component to render the marks. The type is a component: ({ value: number; active: boolean }) => JSX.Element ; value indicates the value represented by the mark, while active indicates wether a thumb is currently standing on the mark
                />
            </View>

            {/* song duration  */}
            <View style={styles.durationWrapper}>
                <Text style={styles.durationText}>0:30</Text>
                <Text style={styles.durationText}>3:00</Text>
            </View>

            {/* song play controls */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 50,
                justifyContent: 'center',
                marginTop: 46
            }}>
                <TouchableOpacity activeOpacity={0.8}>
                    <ShuffleImg />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 60
                }}>
                    <TouchableOpacity activeOpacity={0.8}><SkipBackward /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}><PlayImg /></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}><SkipForward /></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8}><RepeatImg /></TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default PlayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    imgWrapper: {
        alignItems: 'center',
        marginTop: 16
    },
    img: {},
    playTitle: {
        color: 'white',
        fontFamily: 'sf-bold',
        fontSize: 20
    },
    playlist: {
        color: '#F4D6FD',
        fontFamily: 'sf-med',
        fontSize: 14
    },
    playlistInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 41
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    heartIcon: {
        marginRight: 20
    },
    menuIcon: {
        backgroundColor: 'rgba(90, 66, 103, 0.49)',
        padding: 8,
        borderRadius: 50
    },
    seekBarWrapper: {
        marginTop: 41,
        paddingHorizontal: 16
    },
    durationText: {
        color: '#F4D6FD',
        fontSize: 12,
        fontFamily: 'sf-med'
    },
    durationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 16
    },
    grad: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 700,
    },
})
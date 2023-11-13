import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScrollChangeLayout from '../../components/ScrollChangeLayout'
import hillsong from '../../assets/images/hillsong.png'
import { StatusBar } from 'expo-status-bar';
import ShuffleIcon from "../../assets/images/shuffle.svg";
import Options from "../../assets/images/menu.svg";
import PlayIcon from "../../assets/images/play-button.svg"

const ArtistScreen = () => {
  return (
      <ScrollChangeLayout>
          <StatusBar style="light" />
          <ImageBackground source={hillsong} resizeMode="stretch" style={styles.header}></ImageBackground>
          
          {/* other contents */}
          <View style={styles.contentWrapper}>
            <View style={styles.contents}>
                {/* left side */}
                <View style={styles.leftSide}>
                    <Text style={styles.listeners}>52.3M monthly listeners</Text>
                    <View style={styles.btnsWrapper}>
                        <View style={styles.followWrapper}>
                            <Text style={styles.followText}>Follow</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                            <ShuffleIcon />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Options />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* right side */}
                <TouchableOpacity activeOpacity={0.7}>
                    <PlayIcon />
                </TouchableOpacity>
            </View>

          </View>
      </ScrollChangeLayout>
  )
}

export default ArtistScreen

const styles = StyleSheet.create({
    header: {
        height: 445,
        paddingTop: 70,
        paddingHorizontal: 16,
        zIndex: 0,
        paddingBottom: 16,
    },
    contentWrapper: {
        paddingHorizontal: 16,
        marginTop: 16,
    },
    contents: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftSide: {
        flexDirection: 'column',
        gap: 16
    },
    listeners:{
        color: '#98A2B3',
        fontFamily: 'sf-med',
        fontSize: 12,
    },
    btnsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18
    },
    followWrapper: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5
    },
    followText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'sf-med',
        paddingHorizontal: 14,
        paddingVertical: 8,
    }
}) 
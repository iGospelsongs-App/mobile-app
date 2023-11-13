import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScrollChangeLayout from '../../components/ScrollChangeLayout'
import hillsong from '../../assets/images/hillsong.png'
import { StatusBar } from 'expo-status-bar';
import ShuffleIcon from "../../assets/images/shuffle.svg";
import Options from "../../assets/images/menu.svg";
import PlayIcon from "../../assets/images/play-button.svg";
import wonder from "../../assets/images/wonder.png"
import BellOff from "../../assets/images/bell-off.svg"
import MusicItem from '../../components/MusicItem';
import birth from '../../assets/images/birth.png'
import eagles from '../../assets/images/eagles.png'
import { MusicItemType } from '../../types';
import loyal from '../../assets/images/loyal.png'
import adonai from '../../assets/images/adonai.png'

const playlist_music: MusicItemType[] = [
    {
        title: 'The birth of revival',
        artist: 'Dunsin Oyekan',
        image: birth
    },
    {
        title: 'Eagles flight',
        artist: 'Theo Sunday & 1spirit',
        image: eagles
    },
    {
        title: 'Adonai',
        artist: 'Nathaniel Bassey',
        image: adonai
    },
    {
        title: 'Loyal creations',
        artist: 'Hillsong united',
        image: loyal
    }
]

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

                {/* new release */}
                <View style={styles.newRelease}>
                    <Text style={styles.releaseTxt}>New release</Text>
                    <View style={styles.newWrapper}>
                        {/* pics  */}
                        <View>
                            <Image source={wonder} alt='wonder' />
                        </View>
                        {/* info */}
                        <View style={styles.infoWrapper}>
                            <Text style={styles.infoTitle}>New album "Wonder"</Text>
                            <Text style={styles.infoDate}>Release date- <Text style={{ color: 'white' }}>26th September</Text></Text>
                            <TouchableOpacity style={styles.reminderBtn} activeOpacity={0.7}>
                                <Text style={styles.reminderTxt}>Set reminder</Text>
                                <BellOff />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* artist songs list  */}
                <View style={styles.songsWrapper}>
                    <View style={{ marginHorizontal: 16 }}>
                        <Text style={styles.releaseTxt}>Popular</Text>
                    </View>

                    <View style={styles.allSongs}>
                        <View>
                            {
                                playlist_music.map((item, i) => (
                                    <MusicItem data={item} key={i} />
                                ))
                            }
                        </View>
                    </View>
                </View>

                {/* artist history here */}
                <View style={styles.historyWrapper}>
                    <View>
                        <Text style={styles.releaseTxt}>About</Text>
                        <Text style={styles.historyInfo}>
                            Hillsong Worship, born in 1983 as part of Sydney's Hillsong Church, is a global Christian music sensation. Their powerful, genre-blending songs like "Oceans" and "What a Beautiful Name" resonate deeply, offering spiritual inspiration. With live recordings capturing their fervent worship experiences, Hillsong Worship transcends boundaries, uniting believers worldwide. They are a remarkable, unifying presence in contemporary Christian music.
                        </Text>
                    </View>
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
        marginTop: 16,
    },
    contents: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    leftSide: {
        flexDirection: 'column',
        gap: 16
    },
    listeners: {
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
    },
    newRelease: {
        marginTop: 32,
        paddingHorizontal: 16,
    },
    releaseTxt: {
        fontFamily: 'sf-med',
        fontSize: 16,
        color: 'white',
        marginBottom: 9,
    },
    infoTitle: {
        fontFamily: 'sf-med',
        fontSize: 16,
        color: 'white'
    },
    infoDate: {
        color: 'rgba(191, 191, 191, 0.44)',
        fontFamily: 'sf-med',
        fontSize: 12,
    },
    reminderBtn: {
        backgroundColor: '#667085',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
        gap: 5,
        width: 125,
        borderRadius: 6,
    },
    reminderTxt: {
        color: 'white',
        fontFamily: 'sf-med',
        fontSize: 14
    },
    newWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        paddingHorizontal: 14,
        paddingVertical: 13,
        borderRadius: 8
    },
    infoWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 8
    },
    songsWrapper: {
        marginTop: 18,
    },
    allSongs: {
        // marginTop: 15,

    },
    historyWrapper: {
        marginTop: 80,
        paddingHorizontal: 16,
        backgroundColor: '#48484A',
        paddingVertical: 15
    },
    historyInfo: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'sf-med'
    }
}) 
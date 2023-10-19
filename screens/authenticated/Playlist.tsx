import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import img from '../../assets/images/playlist.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Play from '../../assets/images/play-button.svg'
import Heart from '../../assets/images/heart.svg'
import Menu from '../../assets/images/menu.svg'
import Download from '../../assets/images/download.svg'
import MusicItem from '../../components/MusicItem';
import birth from '../../assets/images/birth.png'
import eagles from '../../assets/images/eagles.png'
import { ItemsSlideListEnum, MusicItemType, cardTypeEnum } from '../../types';
import loyal from '../../assets/images/loyal.png'
import adonai from '../../assets/images/adonai.png'
import spec1 from '../../assets/images/spec1.png'
import spec2 from '../../assets/images/spec2.png'
import spec3 from '../../assets/images/spec3.png'
import ItemsSlideList from '../../components/ItemsSlideList';

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

const data = [
    {
        title: '',
        image: spec1,
        id: 1
    },
    {
        title: '',
        image: spec2,
        id: 2
    },
    {
        title: '',
        image: spec3,
        id: 3
    },
]

const Playlist = () => {
  const navigation = useNavigation();
  const [backColor, setBackColor] = useState('transparent');
  const [topPadding, setTopPadding] = useState(50);
  const [height, setHeight] = useState(30)

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    // Define the scroll threshold at which you want to change the background color
    const scrollThreshold = 100;

    // Set the new background color based on the scroll position
    if (offsetY > scrollThreshold) {
      setBackColor('#2c2c2c');
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
          <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
              <ImageBackground source={img} blurRadius={10} resizeMode="cover" style={styles.header}>
                  <View style={styles.imgWrapper}>
                      <Image source={img} style={styles.img} />
                  </View>
              </ImageBackground>

              {/* other contents */}
              <View style={styles.contents}>
                <View style={styles.playlistInfo}>
                    <View>
                        <Text style={styles.playTitle}>Truth in sounds</Text>
                        <Text style={styles.playlist}>Playlist</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Play width={50} height={50} />
                    </TouchableOpacity>
                </View>

                {/* playlist action buttons  */}
                <View style={styles.actButtons}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.actBtn}>
                        <Heart width={25} height={25} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.actBtn}>
                        <Download width={25} height={25} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                       <Menu width={25} height={25} /> 
                    </TouchableOpacity>
                </View>

                {/* playlist music list */}
                <View style={{marginTop: 24}}>
                    {
                        playlist_music.map((item, i) => (
                            <MusicItem data={item} key={i} />
                        ))
                    }
                </View>
                <View style={styles.forYou}>
                    <ItemsSlideList
                        data={data}
                        cardType={cardTypeEnum.TWO}
                        titleText='For you'
                        color={ItemsSlideListEnum.RED}
                    />
                </View>
              </View>
          </ScrollView>
      </View>
  )
}

export default Playlist

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        position: 'relative'
    },
    wrapper: {
        position: 'relative',
    },
    header: {
        height: 445,
        paddingTop: 70,
        paddingHorizontal: 16,
        zIndex: 0
    },
    back: {
        marginBottom: 10
    },
    backWrapper: {
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        paddingLeft: 16,
        justifyContent: 'flex-end',
    },
    imgWrapper: {
        alignItems: 'center',
        marginTop: 16
    },
    img: {},
    contents: {
        marginTop: 20,
    },
    playTitle: {
        color: 'white',
        fontFamily: 'sf-med',
        fontSize: 18
    },
    playlist: {
        color: '#98A2B3',
        fontFamily: 'sf-med',
        fontSize: 14
    },
    playlistInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    actBtn: {
        marginRight: 16
    },
    actButtons: {
        marginTop: 16,
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    forYou: {marginTop: 39, marginHorizontal: 16}
})
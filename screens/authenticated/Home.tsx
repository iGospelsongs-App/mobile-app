import { ScrollView, StyleSheet, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import frame1 from '../../assets/images/frame1.png'
import frame2 from '../../assets/images/frame2.png'
import frame3 from '../../assets/images/frame3.png'
import frame4 from '../../assets/images/frame4.png'
import frame5 from '../../assets/images/frame5.png'
import frame6 from '../../assets/images/frame6.png'
import TopSlider from '../../components/home/TopSlider'
import Header from '../../components/home/Header'
import ItemsSlideList from '../../components/ItemsSlideList'
import { ItemsSlideListEnum, cardTypeEnum } from '../../types'
import SectionHeader from "../../components/SectionHeader";
import {PLAYLIST_MUSIC} from "../../data/explore";
import MusicItem from "../../components/MusicItem";
import * as MediaLibrary from 'expo-media-library';

interface DataProp {
  title: string,
  image: any,
  id: string
}

const data: DataProp[] = [
  {
    title: 'Journey to the deep',
    image: frame1,
    id: '1'
  },
  {
    title: 'Walk by faith',
    image: frame2,
    id: '2'
  },
  {
    title: 'The birth of revival',
    image: frame4,
    id: '3'
  },
  {
    title: 'Hallelujah',
    image: frame3,
    id: '4'
  },
  {
    title: 'Tongues of fire',
    image: frame5,
    id: '5'
  },
  {
    title: 'Miracle no dey tire Jesus',
    image: frame6,
    id: '6'
  },
]

const reversedData = [...data].reverse()

const Home = () => {
  const [songs, setSongs] = useState<MediaLibrary.Asset[]>([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        setPermissionGranted(true);
        fetchSongs();
      } else {
        alert('Permission to access media library is required!');
      }
    };

    const fetchSongs = async () => {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio, // Fetch audio files only
        first: 50, // Number of items to fetch (adjust as needed)
      });
      setSongs(media.assets);
      console.log('ALL SONGS ARE', media.assets);
    };

    getPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* header section  */}
      <Header />

      <ScrollView style={styles.wrapper} showsHorizontalScrollIndicator={false}>
        {/* contents  */}
        <View style={styles.content}>
          {/* slide section  */}
          <View>
            <TopSlider />
          </View>

          {/* items  */}
          <View style={styles.itemsSection}>
            <View style={styles.trendingWrapper}>
              <View style={styles.searchSection}>
                <SectionHeader title='Local Music' color={ItemsSlideListEnum.RED} />
              </View>

              <View>
                {
                  PLAYLIST_MUSIC.map((item, i) => (
                      <MusicItem data={item} key={i} />
                  ))
                }
              </View>
            </View>

            {/* top songs section  */}
            <ItemsSlideList 
              data={data} 
              cardType={cardTypeEnum.ONE} 
              titleText="Top songs in Nigeria" 
              color={ItemsSlideListEnum.GREEN} 
            />

            {/* praise melodies section */}
            <ItemsSlideList
              data={reversedData}
              cardType={cardTypeEnum.ONE}
              titleText='Praise melodies'
              color={ItemsSlideListEnum.RED}
            />

          </View>
          
        </View>

      </ScrollView>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    borderBottomWidth: 0,
  },
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 25
  },
  slideSection: {
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
    height: 168
  },
  itemsSection: {
    marginTop: 50
  },
  itemList: {
    flexDirection: 'row',
  },
  trendingWrapper: {
    marginBottom: 50,
  },
  searchSection: {
    paddingHorizontal: 16
  },


})
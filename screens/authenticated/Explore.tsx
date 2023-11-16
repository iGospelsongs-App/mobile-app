import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Cat1 from '../../assets/images/cat1.svg';
import Cat2 from '../../assets/images/cat2.svg';
import Cat3 from '../../assets/images/cat3.svg';
import SectionHeader from '../../components/SectionHeader';
import ColorCards from '../../components/ColorCards';
import ItemsSlideList from '../../components/ItemsSlideList';
import frame1 from '../../assets/images/frame1.png'
import frame2 from '../../assets/images/frame2.png'
import frame3 from '../../assets/images/frame3.png'
import frame4 from '../../assets/images/frame4.png'
import frame5 from '../../assets/images/frame5.png'
import frame6 from '../../assets/images/frame6.png'
import MusicItem from '../../components/MusicItem';
import birth from '../../assets/images/birth.png'
import eagles from '../../assets/images/eagles.png'
import { ItemsSlideListEnum, MusicItemType, cardTypeEnum } from '../../types';
import loyal from '../../assets/images/loyal.png'
import adonai from '../../assets/images/adonai.png'

const MoodsData = [
  {
    title: 'Soul lifting',
    colors: ['#B00C0D', '#9747FF'] 
  },
  {
    title: 'Thanksgiving',
    colors: ['#540CB0', '#9747FF'] 
  },
  {
    title: 'Praise',
    colors: ['#E28A05', '#FFD747'] 
  },
  {
    title: 'Chants',
    colors: ['#FF7347', '#8A0800'] 
  },
]
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

const Explore = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text style={styles.pageTitle}>Explore</Text>
      </SafeAreaView>
      
      {/* page contents */}
      <View style={styles.flex1}>
        {/* search bar here */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Feather name="search" size={24} color="white" />
            <TextInput placeholder='Search' placeholderTextColor='white' style={styles.input} />
          </View>
        </View>
        
        
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollWrapper}>
          {/* category section  */}
          <View style={styles.catWrapper}>
            <TouchableOpacity style={styles.catContainer} activeOpacity={0.7}>
              <Cat1 />
              <Text style={styles.catText}>New release</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catContainer} activeOpacity={0.7}>
              <Cat2 />
              <Text style={styles.catText}>Top rated</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catContainer} activeOpacity={0.7}>
              <Cat3 />
              <Text style={styles.catText}>Chart</Text>
            </TouchableOpacity>
          </View>

          {/* mood and genres  */}
          <View style={styles.moodSection}>
            <SectionHeader title='Mood and genres' color={''} />
            <View style={styles.moodStack}>
              {
                MoodsData.map((item, i) => (
                  <ColorCards key={i} colors={item.colors} title={item.title} />
                ))
              }
            </View>
          </View>

          {/* top songs section  */}
          <View style={styles.soulCategory}>
            <ItemsSlideList
              data={data}
              cardType={cardTypeEnum.ONE}
              titleText="Soul lifting songs"
              color={ItemsSlideListEnum.BLUE}
            />

            
          </View>

          {/* trending category here  */}
          <View style={styles.trendingWrapper}>
            <View style={styles.searchSection}>
              <SectionHeader title='Trending' color={ItemsSlideListEnum.RED} />
            </View>
            
            <View>
              {
                playlist_music.map((item, i) => (
                  <MusicItem data={item} key={i} />
                ))
              }
            </View>
          </View>

          {/* sermons section  */}
          <View>
            <SectionHeader title='Sermons' color={ItemsSlideListEnum.BLUE} />
          </View>
          
        </ScrollView>
        
      </View>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollWrapper: {
    paddingTop: 41,
  },
  pageTitle: {
    color: 'white',
    fontFamily: 'sf-med',
    fontSize: 24,
    marginBottom: 24,
  },
  searchBar: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 61,
    paddingHorizontal: 14,
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 6,
    marginBottom: 20,
  },
  input: {
    color: 'white',
    flex: 1,
    fontSize: 16,
    fontFamily: 'sf-med',
  },
  catContainer: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    height: 89,
    backgroundColor: '#191919',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 5,
  },
  catText: {
    color: '#D8D8D8',
    fontSize: 14,
    fontFamily: 'sf-med'
  },
  catWrapper: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    flex: 1,
    paddingHorizontal: 16
  },
  moodSection: {
    marginTop: 35,
    paddingHorizontal: 16
  },
  singleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 131,
    backgroundColor: 'red'
  },
  moodStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 23,
    flex: 1
  },
  flex1: {
    flex: 1
  },
  soulCategory: {
    marginTop: 60,
    paddingHorizontal: 16
  },
  trendingWrapper: {
    marginBottom: 50,
    
  },
  searchSection: {
    paddingHorizontal: 16
  }
})
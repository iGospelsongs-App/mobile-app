import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import Cat1 from '../../assets/images/cat1.svg';
import Cat2 from '../../assets/images/cat2.svg';
import Cat3 from '../../assets/images/cat3.svg';
import SectionHeader from '../../components/SectionHeader';
import ColorCards from '../../components/ColorCards';
import ItemsSlideList from '../../components/ItemsSlideList';
import MusicItem from '../../components/MusicItem';
import { EXPLORE_DATA, MOODS_DATA, PLAYLIST_MUSIC, SERMON_DATA } from '../../data/explore';
import { ItemsSlideListEnum, cardTypeEnum } from '../../types';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (text: React.SetStateAction<string>) => {
    setSearchTerm(text);
  }

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
            <TextInput value={searchTerm} onChangeText={handleSearchTerm} placeholder='Search' placeholderTextColor='white' style={styles.input} />
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
                MOODS_DATA.map((item, i) => (
                  <ColorCards key={i} colors={item.colors} title={item.title} />
                ))
              }
            </View>
          </View>

          {/* top songs section  */}
          <View style={styles.soulCategory}>
            <ItemsSlideList
              data={EXPLORE_DATA}
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
                PLAYLIST_MUSIC.map((item, i) => (
                  <MusicItem data={item} key={i} />
                ))
              }
            </View>
          </View>

          {/* sermons section  */}
          <View style={styles.sermonContainer}>
          <ItemsSlideList
              data={SERMON_DATA}
              cardType={cardTypeEnum.THREE}
              titleText='Sermons'
              color={ItemsSlideListEnum.BLUE}
            />

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
    paddingHorizontal: 16
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
  },
  sermonContainer: {
    marginBottom: 20,
    paddingHorizontal: 16
  }
})
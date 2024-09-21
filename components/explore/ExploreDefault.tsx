import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Cat1 from '../../assets/images/cat1.svg';
import Cat2 from '../../assets/images/cat2.svg';
import Cat3 from '../../assets/images/cat3.svg';
import SectionHeader from '../SectionHeader';
import ColorCards from '../ColorCards';
import ItemsSlideList from '../ItemsSlideList';
import MusicItem from '../MusicItem';
import { EXPLORE_DATA, MOODS_DATA, PLAYLIST_MUSIC, SERMON_DATA } from '../../data/explore';
import { ItemsSlideListEnum, cardTypeEnum } from '../../types';

const ExploreDefault = () => {
  return (
    <View>
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
          </View>
  )
}

export default ExploreDefault

const styles = StyleSheet.create({
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
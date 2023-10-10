import { Platform, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import dp from '../../assets/images/dp.png'
import bell from '../../assets/images/bell.png'
import settings from '../../assets/images/settings.png'
import newRelease from '../../assets/images/new.png'
import SectionHeader from '../../components/SectionHeader'
import frame1 from '../../assets/images/frame1.png'
import frame2 from '../../assets/images/frame2.png'
import frame3 from '../../assets/images/frame3.png'
import frame4 from '../../assets/images/frame4.png'

interface DataProp {
  title: string,
  image: any,
}

const data: DataProp[] = [
  {
    title: 'Journey to the deep',
    image: frame1
  },
  {
    title: 'Walk by faith',
    image: frame2
  },
  {
    title: 'The birth of revival',
    image: frame4
  },
  {
    title: 'Hallelujah',
    image: frame3
  },
]

const Home = () => {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* header section  */}
      <SafeAreaView style={styles.header}>
        {/* left section */}
        <View style={styles.headerLeft}>
          <View style={styles.imageCont}>
            <Image source={dp} style={styles.dp} />
          </View>
          <View style={styles.nameCont}>
            <Text style={styles.greet}>Good Morning</Text>
            <Text style={styles.name}>Omatsola Sunday</Text>
          </View>
        </View>
        {/* right section  */}
        <View style={styles.headerRight}>
          <Image source={bell} />
          <Image source={settings} style={styles.sett} />
        </View>
      </SafeAreaView>

      <ScrollView style={styles.wrapper} showsHorizontalScrollIndicator={false}>
        {/* contents  */}
        <View style={styles.content}>
          {/* slide section  */}
          <View>
            <View style={styles.slideSection}>
              <Image source={newRelease} resizeMode='stretch' style={{
                width: '100%',
                height: 165
              }} />
            </View>
          </View>

          {/* items  */}
          <View style={styles.itemsSection}>
            {/* top songs section  */}
            <View style={{marginBottom: 67}}>
              <SectionHeader title="Top songs in Nigeria" color='#30A712' />
              <ScrollView horizontal style={styles.itemList}>
                {
                  data.map((item, i) => (
                    <TouchableOpacity activeOpacity={0.8} key={i} style={styles.cardCover}>
                      <Image source={item.image} style={styles.cardImg} />
                      <Text style={styles.cardDesc}>{item.title}</Text>
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>

            {/* praise melodies section */}
            <View>
              <SectionHeader title="Praise melodies" color='#E31b54' />
              <ScrollView horizontal style={styles.itemList}>
                {
                  data.map((item, i) => (
                    <TouchableOpacity activeOpacity={0.8} key={i} style={styles.cardCover}>
                      <Image source={item.image} style={styles.cardImg} />
                      <Text style={styles.cardDesc}>{item.title}</Text>
                    </TouchableOpacity>
                  )).reverse()
                }
              </ScrollView>
            </View>

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
  dp: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  imageCont: {

  }, 
  nameCont: {
      paddingLeft: 8
  },
  name: {
      fontSize: 15,
      fontFamily: 'sf-med',
      color: 'white'
  },
  greet: {
      fontSize: 14,
      fontFamily: 'sf-reg',
      color: '#636366'
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 18,
      paddingHorizontal: 16,
      marginBottom: Platform.OS === 'android' ? 20 : -10,
  },
  headerLeft: {
      flexDirection: "row",
  },
  headerRight: {
      flexDirection: 'row',
  },
  sett: {
      marginLeft: 16
  },
  slideSection: {
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
    height: 168
  },
  itemsSection: {
    marginTop: 30
  },
  cardCover: {
    width: 137,
    marginRight: 16
  },
  cardImg: {
    width: 137, 
    height: 137
  },
  cardDesc: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'sf-med',
    marginTop: 12
  },
  itemList: {
    flexDirection: 'row',
  }



})
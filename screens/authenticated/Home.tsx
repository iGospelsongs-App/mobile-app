import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
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

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.wrapper} showsHorizontalScrollIndicator={false}>
        {/* contents  */}
        <View style={styles.content}>

          {/* header section  */}
          <View style={styles.header}>
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
          </View>

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
            <View>
              <SectionHeader title="Top songs in Nigeria" color='#30A712' />
              <View>
                <View style={styles.cardCover}>
                  <Image source={frame1} style={styles.cardImg} />
                  <Text style={styles.cardDesc}>Journey to the deep</Text>
                </View>

              </View>
            </View>
          </View>
          
        </View>

      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  wrapper: {
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 18,
    paddingHorizontal: 16
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
      justifyContent: 'space-between'
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
    marginTop: 44,
    width: '100%',
    alignItems: 'center',
    height: 168
  },
  itemsSection: {
    marginTop: 30
  },
  cardCover: {
    width: 137,
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
  }



})
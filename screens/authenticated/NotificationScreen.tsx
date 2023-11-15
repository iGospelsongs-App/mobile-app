import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollChangeLayout from '../../components/ScrollChangeLayout'
import Notif1 from '../../assets/images/notif1.png';
import Notif2 from '../../assets/images/notif2.png';
import Notif3 from '../../assets/images/notif3.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationItem from '../../components/notification/NotificationItem';
import { NotificationDataType } from '../../types';
import { StatusBar } from 'expo-status-bar';

const notificationData: NotificationDataType[] = [
  {
    info: 'Trending Adonai is number 1 in Nigeria',
    date: 'Just now',
    image: Notif1
  },
  {
    info: 'Trending Okaka is number 1 in Nigeria',
    date: 'Just now',
    image: Notif2
  },
  {
    info: 'Trending Identity is number 1 in Nigeria',
    date: 'some days ago',
    image: Notif3
  },
]

const NotificationScreen = () => {
  return (
    <ScrollChangeLayout>
      <StatusBar style={'light'} />
      <View style={styles.container}>
        <SafeAreaView>
        </SafeAreaView>
        <View>
          <Text style={styles.title}>Today</Text>
          <View>
            {
              notificationData.map((items, i) => (
                <NotificationItem 
                  image={items.image}
                  info={items.info}
                  date={items.date}
                  key={items.info}
                />
              ))
            }
          </View>
        </View>
      </View>
    </ScrollChangeLayout>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  txt: {
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'sf-bold',
    marginBottom: 25
  },
})
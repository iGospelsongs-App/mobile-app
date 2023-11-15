import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollChangeLayout from '../../components/ScrollChangeLayout'
import Notif1 from '../../assets/images/notif1.svg';
import Notif2 from '../../assets/images/notif2.svg';
import Notif3 from '../../assets/images/notif3.svg'
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationItem from '../../components/notification/NotificationItem';

const NotificationScreen = () => {
  return (
    <ScrollChangeLayout>
      <View style={styles.container}>
        <SafeAreaView>
          <View></View>
        </SafeAreaView>
        <View>
          <Text style={styles.title}>Today</Text>
          <View>

            <NotificationItem />
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
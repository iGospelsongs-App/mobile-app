import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notif1 from '../../assets/images/notif1.svg'

const NotificationItem = () => {
    return (
        <View style={styles.content}>
            <View>
                <Notif1 />
            </View>
            <View>
                <Text style={styles.notifInfo}>Trending Adonai is number 1 in Nigeria</Text>
                <Text style={styles.notifTime}>Some days ago</Text>
            </View>
        </View>
    )
}

export default NotificationItem

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
      },
      notifInfo: {
        fontSize: 15,
        fontFamily: 'sf-med',
        color: 'white',
        marginBottom: 6
      },
      notifTime: {
        fontFamily: 'sf-med',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.63)',
      }
})
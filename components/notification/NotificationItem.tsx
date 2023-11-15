import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notif1 from '../../assets/images/notif1.svg'

const NotificationItem = ({info, date, image}) => {
    return (
        <View style={styles.content}>
            <View>
                <Image source={image} />
            </View>
            <View>
                <Text style={styles.notifInfo}>{info}</Text>
                <Text style={styles.notifTime}>{date}</Text>
            </View>
        </View>
    )
}

export default NotificationItem

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 26
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
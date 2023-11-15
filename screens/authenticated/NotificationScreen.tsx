import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollChangeLayout from '../../components/ScrollChangeLayout'

const NotificationScreen = () => {
  return (
    <ScrollChangeLayout>
        <View>
            <View>
                <Text>Today</Text>
            </View>
        </View>
    </ScrollChangeLayout>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})
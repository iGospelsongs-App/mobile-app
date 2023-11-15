import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

const Explore = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text style={styles.pageTitle}>Explore</Text>
      </SafeAreaView>
      
      {/* page contents */}
      <View>
        {/* search bar here */}
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="white" />
          <TextInput placeholder='Search' placeholderTextColor='white' style={styles.input} />
        </View>
        
      </View>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16
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
    gap: 6
  },
  input: {
    color: 'white',
    flex: 1,
    fontSize: 16,
    fontFamily: 'sf-med'
  }
})
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import ExploreDefault from '../../components/explore/ExploreDefault';

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
          <ExploreDefault />
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
  searchSection: {
    paddingHorizontal: 16
  },
  flex1: {
    flex: 1
  },
})
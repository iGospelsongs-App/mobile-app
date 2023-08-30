import { View, Dimensions, Image, StyleSheet, Text, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import img1 from '../../assets/images/ob1.png'
import img2 from '../../assets/images/ob2.png'
import img3 from '../../assets/images/ob3.png'
import OnboardingSlide from '../../components/onboarding/OnboardingSlide'
import { OnboardingDataType } from '../../types'

const {width, height} = Dimensions.get('window');

const onBoardingData: OnboardingDataType[] = [
    {
        id: 1,
        image: img1,
        title: 'Awaken your spirit with Heavenly melodies',
        btn: false,
        indicator: true
    },
    {
        id: 2,
        image: img3,
        title: 'Elevate your soul with praise and worship',
        btn: false,
        indicator: true
    },
    {
        id: 3,
        image: img2,
        title: 'Worship in truth and in spirit',
        btn: true,
        indicator: false
    },
]


const Onboarding = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const updateCurrentSlideIndex = (e: any) => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width);
      setCurrentSlideIndex(currentIndex)
    }


  return (
    <View style={styles.container}>
          <FlatList
              onMomentumScrollEnd={updateCurrentSlideIndex}
              data={onBoardingData}
              contentContainerStyle={{ height: '100%' }}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => <OnboardingSlide data={onBoardingData} slideIndex={currentSlideIndex} item={item} />}
              pagingEnabled
              bounces={false}
          />
      
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
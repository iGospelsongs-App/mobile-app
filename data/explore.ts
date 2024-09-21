import frame1 from '../assets/images/frame1.png'
import frame2 from '../assets/images/frame2.png'
import frame3 from '../assets/images/frame3.png'
import frame4 from '../assets/images/frame4.png'
import frame5 from '../assets/images/frame5.png'
import frame6 from '../assets/images/frame6.png'
import {DataProp, MoodDataType, MusicItemType} from '../types/index'
import sermon1 from '../assets/images/sermon1.png';
import birth from '../assets/images/birth.png'
import eagles from '../assets/images/eagles.png'
import loyal from '../assets/images/loyal.png'
import adonai from '../assets/images/adonai.png';

export const EXPLORE_DATA: DataProp[] = [
    {
      title: 'Journey to the deep',
      image: frame1,
      id: '1'
    },
    {
      title: 'Walk by faith',
      image: frame2,
      id: '2'
    },
    {
      title: 'The birth of revival',
      image: frame4,
      id: '3'
    },
    {
      title: 'Hallelujah',
      image: frame3,
      id: '4'
    },
    {
      title: 'Tongues of fire',
      image: frame5,
      id: '5'
    },
    {
      title: 'Miracle no dey tire Jesus',
      image: frame6,
      id: '6'
    },
  ]

export const MOODS_DATA: MoodDataType[] = [
    {
      title: 'Soul lifting',
      colors: ['#B00C0D', '#9747FF'] 
    },
    {
      title: 'Thanksgiving',
      colors: ['#540CB0', '#9747FF'] 
    },
    {
      title: 'Praise',
      colors: ['#E28A05', '#FFD747'] 
    },
    {
      title: 'Chants',
      colors: ['#FF7347', '#8A0800'] 
    },
  ]

export const SERMON_DATA = [
    {
      title: 'Kononia Global',
      preacher: 'Sermon Apts Joshua Selman',
      image: sermon1,
      id: 1
    },
    {
      title: 'Kononia Global',
      preacher: 'Sermon Aptl Joshua Selman',
      image: sermon1,
      id: 2
    },
    {
      title: 'Kononia Global',
      preacher: 'Sermon Apt Joshua Selman',
      image: sermon1,
      id: 3
    }
  ]

export const PLAYLIST_MUSIC: MusicItemType[] = [
    {
        title: 'The birth of revival',
        artist: 'Dunsin Oyekan',
        image: birth
    },
    {
        title: 'Eagles flight',
        artist: 'Theo Sunday & 1spirit',
        image: eagles
    },
    {
        title: 'Adonai',
        artist: 'Nathaniel Bassey',
        image: adonai
    },
    {
        title: 'Loyal creations',
        artist: 'Hillsong united',
        image: loyal
    }
  ]
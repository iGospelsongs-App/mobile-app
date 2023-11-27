import { FC } from "react";
import { SvgProps } from "react-native-svg";

export interface OnboardingDataType {
    id: number,
    image: string,
    title: string,
    btn: boolean,
    indicator: boolean
}

export interface MoodDataType {
    title: string;
    colors: string[];
}
export interface DataProp {
    title: string,
    image: any,
    id: string
  }

export interface OnboardingSlideType {
    data: OnboardingDataType[],
    item: OnboardingDataType,
    slideIndex: number,
}

export interface SignupType {
    cover_image: string;
    image: string;
    full_name: string;
    email: string;
    username: string;
    password: string;
    agreement: boolean;
    newsletter: boolean;
}

export interface MusicItemType {
    title: string;
    artist: string;
    image: string;
}

export enum cardTypeEnum {
    ONE = 1,
    TWO = 2,
    THREE = 3
}

export enum ItemsSlideListEnum {
    GREEN = "#30A712",
    RED = '#E31B54',
    BLUE = '#175CD3'
}

export interface NotificationDataType {
    info: string;
    date: string;
    image: string;
}
import { FC } from "react";
import { SvgProps } from "react-native-svg";

export interface OnboardingDataType {
    id: number,
    image: string,
    title: string,
    btn: boolean,
    indicator: boolean
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
}

export enum ItemsSlideListEnum {
    GREEN = "#30A712",
    RED = '#E31B54'
}

export interface NotificationDataType {
    info: string;
    date: string;
    image: string;
}
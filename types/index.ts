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
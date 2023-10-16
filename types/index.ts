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
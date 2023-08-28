import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        'sf-bold': require('../assets/fonts/sf-pro/sf-bold.OTF'),
        'sf-med': require('../assets/fonts/sf-pro/sf-med.OTF'),
        'sf-reg': require('../assets/fonts/sf-pro/sf-reg.OTF'),
    })

    return fontsLoaded;
}
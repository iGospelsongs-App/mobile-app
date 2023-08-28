import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

import UserMethod from './screens/onboarding/UserMethod';

export default function App() {
  const [fontsLoaded] = useFonts({
    'sf-bold': require('./assets/fonts/sf-pro/sf-bold.otf'),
    'sf-med': require('./assets/fonts/sf-pro/sf-med.otf'),
    'sf-reg': require('./assets/fonts/sf-pro/sf-reg.otf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <UserMethod />
      <StatusBar style="auto" />
    </View>
  );
}


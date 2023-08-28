import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import UserMethod from './screens/onboarding/UserMethod';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <UserMethod />
      <StatusBar style="auto" />
    </View>
  );
}


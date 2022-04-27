import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DataFetch from './src/components/DataFetch'
import tw from 'tailwind-react-native-classnames'
import DataSend from './src/components/DataSend';
import Navigator from './src/Navigation';

export default function App() {
  return (
    <View style={tw` p-10 bg-gray-200 h-full`}>
      
     <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

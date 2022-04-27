import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import DataSend from '../components/DataSend';

export default function LoginScreen() {
  return (
    <View style={tw`p-10 `}>
        <Text> Login </Text>
       <View style={tw`h-1/2`}>
      <DataSend/>
      </View>
     </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'
export default function Navigator() {

  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
     <Stack.Navigator
     initialRouteName='Login'
     screenOptions={{headerShown: false}}>
       <Stack.Screen name='Login' component={LoginScreen}/>
       <Stack.Screen name='Home' component={HomeScreen}/>
       

     </Stack.Navigator>
   </NavigationContainer>
  );
}

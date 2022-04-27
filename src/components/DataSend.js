import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'
import {LOGIN_API_URL} from '@env'

export default function DataSend() {
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);
    const navigation= useNavigation();

    const PostMessage= async (credentials) =>{
        console.log('Posted')
        
        const resp= await fetch(LOGIN_API_URL, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            }),
        })

        const data = await resp.json();
        if (data.message !== 'success') {
          console.log('invalid Credentials')
        } else {
          navigation.navigate('Home')
        }

        setEmail('');
        setPassword('');
    }

    useEffect(() => {
      PostMessage()
    }, [])
  return (
    <View style={tw` `}>
      <Text>Input Data</Text>
      <TextInput style={tw`mt-5 border-2 border-gray-300 p-3 `}
       placeholder="titile" value={email} onChangeText={text => setEmail(text)} />

      <TextInput  style={tw`mt-5 border-2 border-gray-300 p-2 `}
    placeholder="Password"

      value={password}
      onChangeText={text => setPassword(text)} />

      <TouchableOpacity style={tw` bg-blue-100 mt-10 justify-center items-center`}
      onPress={PostMessage}>
          <Text style={tw`p-5 font-bold text-xl`}>Log in</Text>
      </TouchableOpacity>
     </View>
  );
}

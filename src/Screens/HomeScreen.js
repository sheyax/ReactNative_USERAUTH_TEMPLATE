import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataFetch from '../components/DataFetch'
import tw from 'tailwind-react-native-classnames'
import DataSend from '../components/DataSend';
import {USER_API_URL} from '@env'

export default function HomeScreen() {

    const [user, setUser]= useState(null)


    const getUser = async (credentials) =>{
        const resp= await fetch(USER_API_URL, {
            method: 'GET',
            headers:{'Content-Type': 'application/json'},
            Credentials: 'include'

        })

        const data= await resp.json()
        setUser(data.name)
    }

    useEffect(() => {
        getUser()
    }, [user])
    
  return (
    <View>
        <View style={tw`h-1/2`}>
            <Text style={tw`font-bold text-xl`}>Hello {user}</Text>
        </View>
      <View style={tw`h-1/2`}>
      <DataFetch/>
      </View>
     </View>
  );
}

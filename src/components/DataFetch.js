import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {DATA_API_URL} from '@env'

import tw from 'tailwind-react-native-classnames'

export default function DataFetch() {

    const [messages , setMessages] = useState(null)

    const getMessage = async () => {
        const resp = await fetch(DATA_API_URL);
        const data = await resp.json();
        setMessages(data)
      }

      getMessage();

  return (
    <View style={tw` `}>
        {messages && messages.map((message)=> (
            <View key={message.id} style={tw` `}>
                
                <Text style={tw`mt-2 font-bold `}>{message.title}</Text>
                <Text>{message.message}</Text>
                </View>
        ))}

     </View>
  );
}

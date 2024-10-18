import React, {useState} from 'react';
import {Text, View} from 'react-native';

export default function Select(): React.JSX.Element {
  const [active, setActive] = useState('today');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <Text
        style={{
          paddingVertical: 9,
          paddingHorizontal: 35,
          fontSize: 16,
          backgroundColor: active === 'today' ? '#E0B6FF' : 'white',
          color: 'black',
          borderRadius: 14,
        }}
        onPress={() => setActive('today')}>
        Today
      </Text>
      <Text
        style={{
          paddingVertical: 9,
          paddingHorizontal: 20,
          fontSize: 16,
          backgroundColor: active === 'tomorrow' ? '#E0B6FF' : 'white',
          color: 'black',
          borderRadius: 14,
        }}
        onPress={() => setActive('tomorrow')}>
        Tomorrow
      </Text>
      <Text
        style={{
          paddingVertical: 9,
          paddingHorizontal: 30,
          fontSize: 16,
          backgroundColor: active === '10 days' ? '#E0B6FF' : 'white',
          color: 'black',
          borderRadius: 14,
        }}
        onPress={() => setActive('10 days')}>
        10 days
      </Text>
    </View>
  );
}

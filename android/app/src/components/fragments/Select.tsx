import React, {useState} from 'react';
import {Text, View} from 'react-native';

export default function Select({selectDay, setSelectDay}): React.JSX.Element {
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
          backgroundColor: selectDay === 'today' ? '#E0B6FF' : 'white',
          color: 'black',
          borderRadius: 14,
        }}
        onPress={() => setSelectDay('today')}>
        Today
      </Text>
      <Text
        style={{
          paddingVertical: 9,
          paddingHorizontal: 20,
          fontSize: 16,
          backgroundColor: selectDay === 'tomorrow' ? '#E0B6FF' : 'white',
          color: 'black',
          borderRadius: 14,
        }}
        onPress={() => setSelectDay('tomorrow')}>
        Tomorrow
      </Text>
      <Text
        style={{
          paddingVertical: 9,
          paddingHorizontal: 30,
          fontSize: 16,
          backgroundColor: selectDay === '10 days' ? '#E0B6FF' : 'white',
          color: 'black',
          borderRadius: 14,
        }}
        onPress={() => setSelectDay('10 days')}>
        10 days
      </Text>
    </View>
  );
}

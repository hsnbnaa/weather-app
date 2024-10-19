import React from 'react';
import {Text, View} from 'react-native';

export default function RainContent({hours, value}): React.JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 15, color: 'black'}}>{hours}</Text>
      <View
        style={{
          width: 230,
          height: 25,
          backgroundColor: '#FAEDFF',
          borderRadius: 100,
        }}>
        <View
          style={{
            width: `${value}`,
            height: '100%',
            backgroundColor: '#8A20D5',
            borderRadius: 100,
          }}
        />
      </View>
      <Text style={{fontSize: 15, color: 'black'}}>{value}</Text>
    </View>
  );
}

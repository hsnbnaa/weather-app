import React from 'react';
import {View, Text} from 'react-native';

export default function TemperatureStatus(): React.JSX.Element {
  return (
    <View style={{position: 'absolute', left: 23, top: 185}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 112, color: 'white'}}>3°</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            bottom: 30,
            left: 70,
          }}>
          Feels like -2°
        </Text>
      </View>
    </View>
  );
}

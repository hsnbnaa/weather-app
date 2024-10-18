import React from 'react';
import {View, Text, Image} from 'react-native';

export default function SkyStatus(): React.JSX.Element {
  return (
    <View
      style={{
        paddingTop: 55,
        paddingHorizontal: 23,
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          flexDirection: 'column',
          gap: 14,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../../../assets/images/cloud-sun.png')}></Image>
        <Text style={{fontSize: 22, color: 'white'}}>Cloudy</Text>
      </View>
    </View>
  );
}

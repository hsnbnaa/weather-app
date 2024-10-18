import React from 'react';
import {View, Text} from 'react-native';
import HourlyHeader from '../../../../../assets/svg/hourly.svg';
import Cloudy from '../../../../../assets/svg/cloudy.svg';

export default function Hourly(): React.JSX.Element {
  return (
    <View
      style={{
        marginHorizontal: 23,
        paddingVertical: 12,
        paddingHorizontal: 11,
        backgroundColor: 'rgba(208, 188, 255, 0.3)',
        borderRadius: 18,
        flexDirection: 'column',
        gap: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <HourlyHeader />
        <Text style={{fontSize: 14, color: 'black'}}>Hourly forecast</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <View style={{flexDirection: 'column', gap: 5, alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: 'black'}}>Now</Text>
          <Cloudy />
          <Text style={{fontSize: 19, color: 'black'}}>10°</Text>
        </View>
      </View>
    </View>
  );
}

import React from 'react';
import {Text, View} from 'react-native';
import Line from '../../../../../assets/svg/line.svg';
import Cloudy from '../../../../../assets/svg/cloudy.svg';

export default function TenDaysContent(): React.JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 15,
        backgroundColor: '#EBDEFF',
        borderRadius: 18,
      }}>
      <View>
        <Text style={{fontSize: 16, color: 'black', marginBottom: 5}}>
          Today
        </Text>
        <Text style={{fontSize: 16, color: '#494649'}}>Cloudy and Sunny</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text style={{fontSize: 16, color: '#2E004E'}}>3°</Text>
          <Text style={{fontSize: 16, color: '#2E004E'}}>-2°</Text>
        </View>
        <Line />
        <Cloudy />
      </View>
    </View>
  );
}

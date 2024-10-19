import React from 'react';
import {View, Text} from 'react-native';
import ForecastHeader from '../elements/ForecastHeader';
import RainContent from '../elements/RainContent';

const item = [
  {
    hours: '7 PM',
    value: '27%',
  },
  {
    hours: '8 PM',
    value: '44%',
  },
  {
    hours: '9 PM',
    value: '56%',
  },
  {
    hours: '10 PM',
    value: '88%',
  },
];

export default function Rain(): React.JSX.Element {
  return (
    <View
      style={{
        marginHorizontal: 23,
        paddingVertical: 12,
        paddingHorizontal: 11,
        marginBottom: 25,
        backgroundColor: 'rgba(208, 188, 255, 0.3)',
        borderRadius: 18,
        flexDirection: 'column',
        gap: 16,
      }}>
      <ForecastHeader svg_file={'RainIcon'} title={'Rain forecast'} />
      <View style={{flexDirection: 'column', gap: 12, paddingHorizontal: 7}}>
        {item.map((item, index) => (
          <RainContent key={index} hours={item.hours} value={item.value} />
        ))}
      </View>
    </View>
  );
}

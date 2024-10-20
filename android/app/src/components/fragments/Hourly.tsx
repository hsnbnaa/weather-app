import React from 'react';
import {View} from 'react-native';
import ForecastHeader from '../elements/ForecastHeader';
import HourlyItem from '../elements/HourlyItem';

const item = [
  {
    svg_file: 'Cloudy',
    title: 'Now',
    value: '10°',
  },
  {
    svg_file: 'Foggy',
    title: '10AM',
    value: '8°',
  },
  {
    svg_file: 'Foggy',
    title: '11AM',
    value: '5°',
  },
  {
    svg_file: 'Cloudy',
    title: '12PM',
    value: '12°',
  },
  {
    svg_file: 'Cloudy',
    title: '1PM',
    value: '9°',
  },
  {
    svg_file: 'Foggy',
    title: '2PM',
    value: '12°',
  },
];

export default function Hourly(): React.JSX.Element {
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
      <ForecastHeader svg_file={'HourlyIcon'} title={'Hourly forecast'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        {item.map((item, index) => (
          <HourlyItem
            key={index}
            svg_file={item.svg_file}
            title={item.title}
            value={item.value}
          />
        ))}
      </View>
    </View>
  );
}

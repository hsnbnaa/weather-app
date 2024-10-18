import React from 'react';
import {View} from 'react-native';
import MiddleCard from '../elements/MiddleCard';

const item = [
  {
    svg_file: 'WindSpeed',
    title: 'Wind Speed',
    value: '12 km/h',
    arrow: 'ArrowDown',
    status: '2 km/h',
  },
  {
    svg_file: 'RainChance',
    title: 'Rain Chance',
    value: '24%',
    arrow: 'ArrowUp',
    status: '10%',
  },
  {
    svg_file: 'Pressure',
    title: 'Pressure',
    value: '720 hpa',
    arrow: 'ArrowUp',
    status: '32 hpa',
  },
  {
    svg_file: 'UVIndex',
    title: 'UV Index',
    value: '2,3',
    arrow: 'ArrowDown',
    status: '0.3',
  },
];

export default function Middle(): React.JSX.Element {
  return (
    <View
      style={{
        paddingHorizontal: 23,
        paddingBottom: 7,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {item.map((item, index) => (
        <MiddleCard
          key={index}
          svg_file={item.svg_file}
          title={item.title}
          value={item.value}
          arrow={item.arrow}
          status={item.status}
        />
      ))}
    </View>
  );
}

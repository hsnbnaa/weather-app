import React from 'react';
import {View, Text} from 'react-native';
import Cloudy from '../../../../../assets/svg/cloudy.svg';
import Foggy from '../../../../../assets/svg/foggy.svg';

const svgMap = {
  Cloudy,
  Foggy,
};

export default function HourlyItem({
  svg_file,
  title,
  value,
}): React.JSX.Element {
  const SvgIcon = svgMap[svg_file];

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
      }}>
      <Text style={{fontSize: 14, color: 'black'}}>{title}</Text>
      {SvgIcon && <SvgIcon />}
      <Text style={{fontSize: 19, color: 'black'}}>{value}</Text>
    </View>
  );
}

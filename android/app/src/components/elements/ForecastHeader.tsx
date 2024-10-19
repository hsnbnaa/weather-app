import React from 'react';
import {View, Text} from 'react-native';
import HourlyIcon from '../../../../../assets/svg/hourly.svg';
import DailyIcon from '../../../../../assets/svg/daily.svg';
import RainIcon from '../../../../../assets/svg/rain.svg';

const svgMap = {
  HourlyIcon,
  DailyIcon,
  RainIcon,
};

export default function ForecastHeader({svg_file, title}): React.JSX.Element {
  const SvgIcon = svgMap[svg_file];

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}>
      {SvgIcon && <SvgIcon />}
      <Text style={{fontSize: 14, color: 'black'}}>{title}</Text>
    </View>
  );
}

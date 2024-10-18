import React from 'react';
import {View, Text} from 'react-native';
import WindSpeed from '../../../../../assets/svg/wind.svg';
import RainChance from '../../../../../assets/svg/rain.svg';
import Pressure from '../../../../../assets/svg/pressure.svg';
import UVIndex from '../../../../../assets/svg/uv.svg';
import ArrowDown from '../../../../../assets/svg/arrow-down.svg';
import ArrowUp from '../../../../../assets/svg/arrow-up.svg';

const svgMap = {
  WindSpeed,
  RainChance,
  Pressure,
  UVIndex,
};

const arrowMap = {
  ArrowDown,
  ArrowUp,
};

export default function MiddleCard({
  svg_file,
  title,
  value,
  arrow,
  status,
}): React.JSX.Element {
  const SvgIcon = svgMap[svg_file];
  const ArrowIcon = arrowMap[arrow];
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(208, 188, 255, 0.3)',
        opacity: 0.8,
        borderRadius: 16,
        width: '48%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      {SvgIcon && <SvgIcon width={28} height={28} />}
      <View>
        <Text style={{fontSize: 14, color: 'black', marginBottom: 5}}>
          {title}
        </Text>
        <Text style={{fontSize: 16, color: 'black'}}>{value}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right: 10,
          bottom: 5,
        }}>
        {ArrowIcon && <ArrowIcon />}
        <Text style={{fontSize: 11, color: 'black', fontWeight: 'semibold'}}>
          {status}
        </Text>
      </View>
    </View>
  );
}

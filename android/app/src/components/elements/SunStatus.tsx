import React from 'react';
import {View, Text} from 'react-native';
import Sunrise from '../../../../../assets/svg/sunrise.svg';
import Sunset from '../../../../../assets/svg/sunset.svg';

const svgMap = {
  Sunrise,
  Sunset,
};

export default function SunStatus({svg_file, title, value, status}) {
  const SvgIcon = svgMap[svg_file];

  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 11,
        backgroundColor: 'rgba(208, 188, 255, 0.3)',
        borderRadius: 18,
        width: '47%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
      }}>
      {SvgIcon && <SvgIcon />}
      <View>
        <Text style={{fontSize: 14, color: 'black', marginBottom: 5}}>
          {title}
        </Text>
        <Text style={{fontSize: 14, color: 'black'}}>{value}</Text>
      </View>
      <Text
        style={{
          fontSize: 10,
          color: 'black',
          fontWeight: 500,
          position: 'absolute',
          right: 14,
          bottom: 8,
        }}>
        {status}
      </Text>
    </View>
  );
}

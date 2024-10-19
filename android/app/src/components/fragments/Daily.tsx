import React from 'react';
import {View} from 'react-native';
import ForecastHeader from '../elements/ForecastHeader';
import Graphic from '../../../../../assets/svg/day-graphic.svg';

export default function Daily(): React.JSX.Element {
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
      <ForecastHeader svg_file={'DailyIcon'} title={'Daily forecast'} />
      <Graphic />
    </View>
  );
}

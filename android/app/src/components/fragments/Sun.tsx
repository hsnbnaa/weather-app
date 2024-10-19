import React from 'react';
import {View} from 'react-native';
import SunStatus from '../elements/SunStatus';

export default function Sun(): React.JSX.Element {
  return (
    <View
      style={{
        marginHorizontal: 23,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <SunStatus
        svg_file={'Sunrise'}
        title={'Sunrise'}
        value={'4:20 AM'}
        status={'4h ago'}
      />
      <SunStatus
        svg_file={'Sunset'}
        title={'Sunset'}
        value={'4:50 PM'}
        status={'in 9h'}
      />
    </View>
  );
}

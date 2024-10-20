import React from 'react';
import {View, Text} from 'react-native';
import TenDaysContent from '../elements/TenDaysContent';

export default function TenDays(): React.JSX.Element {
  return (
    <View style={{flexDirection: 'column', gap: 10, paddingHorizontal: 23}}>
      <TenDaysContent />
    </View>
  );
}

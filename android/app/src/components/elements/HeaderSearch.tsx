import React from 'react';
import {View, Text, Image} from 'react-native';

export default function HeaderSearch(): React.JSX.Element {
  return (
    <View
      style={{
        paddingTop: 58,
        paddingHorizontal: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, color: 'white'}}>Kharkiv, Ukraine</Text>
      <Image
        source={require('../../../../../assets/images/search.png')}></Image>
    </View>
  );
}

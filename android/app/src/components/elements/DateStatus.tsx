import React from 'react';
import {View, Text} from 'react-native';

export default function DateStatus(): React.JSX.Element {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 23,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, color: 'white', alignSelf: 'flex-end'}}>
          January 18, 16:14
        </Text>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'right',
            }}>
            Day 3°
          </Text>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Night -1°
          </Text>
        </View>
      </View>
    </View>
  );
}

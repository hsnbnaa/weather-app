import React from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import HeaderSearch from '../elements/HeaderSearch';
import SkyStatus from '../elements/SkyStatus';
import TemperatureStatus from '../elements/TemperatureStatus';
import DateStatus from '../elements/DateStatus';

const {height} = Dimensions.get('window');

export default function Header(): React.JSX.Element {
  return (
    <View style={styles.containerHeader}>
      <ImageBackground
        source={require('../../../../../assets/images/background-main.png')}
        style={styles.backgroundMain}>
        <HeaderSearch />
        <SkyStatus />
        <TemperatureStatus />
        <DateStatus />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: height / 2,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    overflow: 'hidden',
  },
  backgroundMain: {
    width: '100%',
    height: '100%',
  },
});

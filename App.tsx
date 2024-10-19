import React, {useState} from 'react';
import {ScrollView, Dimensions, StatusBar} from 'react-native';
import Header from './android/app/src/components/fragments/Header';
import Select from './android/app/src/components/fragments/Select';
import Middle from './android/app/src/components/fragments/Middle';
import Hourly from './android/app/src/components/fragments/Hourly';
import Daily from './android/app/src/components/fragments/Daily';
import Rain from './android/app/src/components/fragments/Rain';
import Sun from './android/app/src/components/fragments/Sun';

const {height} = Dimensions.get('window');

function App(): React.JSX.Element {
  return (
    <ScrollView
      style={{
        flexDirection: 'column',
        height: height,
        width: '100%',
        backgroundColor: '#F6EDFF',
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Select />
      <Middle />
      <Hourly />
      <Daily />
      <Rain />
      <Sun />
    </ScrollView>
  );
}

export default App;

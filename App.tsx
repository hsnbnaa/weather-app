import React from 'react';
import {ScrollView, Dimensions, StatusBar} from 'react-native';
import Header from './android/app/src/components/fragments/Header';
import SelectedDay from './android/app/src/components/layout/SelectedDay';

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
      <SelectedDay />
    </ScrollView>
  );
}

export default App;

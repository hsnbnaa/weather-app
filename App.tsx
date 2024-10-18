import React, {useState} from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import Header from './android/app/src/components/fragments/Header';
import Select from './android/app/src/components/fragments/Select';
import Middle from './android/app/src/components/fragments/Middle';
import Hourly from './android/app/src/components/fragments/Hourly';

const {height} = Dimensions.get('window');

function App(): React.JSX.Element {
  const [active, setActive] = useState('today');

  return (
    <View
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
    </View>
  );
}

export default App;

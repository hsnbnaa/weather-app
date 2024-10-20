import React, {useState} from 'react';
import {View} from 'react-native';
import Middle from '../fragments/Middle';
import Hourly from '../fragments/Hourly';
import Daily from '../fragments/Daily';
import Rain from '../fragments/Rain';
import Sun from '../fragments/Sun';
import Select from '../fragments/Select';
import TenDays from '../fragments/TenDays';

export default function SelectedDay(): React.JSX.Element {
  const [selectDay, setSelectDay] = useState('today');

  return (
    <View>
      <Select selectDay={selectDay} setSelectDay={setSelectDay} />

      {selectDay === 'today' && (
        <>
          <Middle />
          <Hourly />
          <Daily />
          <Rain />
          <Sun />
        </>
      )}

      {selectDay === '10 days' && (
        <>
          <TenDays />
        </>
      )}
    </View>
  );
}

/**
 * React Native Dropdown Picker
 * Author: Mainak Shil
 * 21 May, 2021
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Dropdown} from './src/components/DropdownPicker';
import {hobbyArr, PrimaryColor, SelectedItemColor} from './src/config';

const App = () => {
  const [hobby, setHobby] = useState(hobbyArr[0].value);
  const onChangeHobby = t => setHobby(t);

  return (
    <View style={styles.container}>
      <Dropdown
        data={hobbyArr}
        value={hobby}
        onChangeText={onChangeHobby}
        labelFontSize={14}
        containerStyle={styles.dropdownContainerStyle}
        baseColor={PrimaryColor}
        textColor={PrimaryColor}
        selectedItemColor={SelectedItemColor}
        pickerStyle={styles.dropdownPickerStyle}
        dropdownPosition={0}
        fontSize={14}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, marginTop: 100},
  dropdownContainerStyle: {width: '100%', marginTop: -30},
  dropdownPickerStyle: {marginTop: 50},
});

export default App;

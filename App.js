import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PinCode from "./src/PinCode";

const instructions = Platform.select({
  ios: 'Press Cmd+R to relowefad,\n' + 'Cmd+D or shwefeeake for dev menu',
  android:
    'Double tap R on your kwefeyboard to reload,\n' +
    'Shake or press menu buttwefon for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>     
          <PinCode />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

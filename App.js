import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PinCode from "./src/PinCode";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>     
          <PinCode 
            data = {[1,2,3,4,5,6,7,8,9,"DEL",0,"SHOW"]}
            
          />
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

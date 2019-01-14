import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PinCode, { Keyboard } from "./src/PinCode";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>  
          <View style={{ alignItems : 'center', justifyContent : 'center',}}>
          <Text style={{fontSize: 40,  marginTop: 150,  }}>Pin Code View</Text>   
          </View>
          <PinCode 
            data = {[1,2,3,4,5,6,7,8,9,"DEL",0,"SHOW"]}
            pinLength={5}
            savedPin= {[1,1,1,1,1]}
            emptyFill= {"_"}
            secureFill={"•"}
            onSuccess={ () => console.warn("richtig") }
            onFailure={ () => console.warn("falsch") }
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    backgroundColor: 'gray',
  },
});

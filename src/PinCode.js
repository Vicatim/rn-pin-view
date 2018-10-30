//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PinScreen from "./Parts/PinScreen.part"
import Keyboard from "./Parts/Keyboard.part"

// create a component
export default class PinCode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PinScreen />
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
          
                <Keyboard />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 80,
        backgroundColor: 'orange',
    },
});

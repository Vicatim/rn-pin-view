//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import PinScreen from "./Parts/PinScreen.part"
import Keyboard from "./Parts/Keyboard.part"

// import Style
import { defaultStyles as styles } from "./Styles/default.style"

export PinScreen from "./Parts/PinScreen.part"
export Keyboard from "./Parts/Keyboard.part"
export default class PinCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            pinCode: new Array(this.props.pinLength).fill(this.props.emptyFill),
            secure: true,
            savedPin: this.props.savedPin,
            match: false,
        };
    }
    // Activitiy
    onPressActivity = ( element ) => {
        if (element == "DEL") {
            this.deleteItem();
        } else if (element == "SHOW") {
            this.showInput();
        } else {
            this.pushItem(element);
            this.matchPin();
        }
    }
    // DEL Button
    deleteItem = () => {
        for (let index = this.state.pinCode.length - 1; index >= 0 ; index--) {
            if(this.state.pinCode[index] !== this.props.emptyFill){
                let pin = this.state.pinCode;
                pin[index] = this.props.emptyFill;
                this.setState({
                    pinCode: pin,
                });
                break;
            }
        }
    }
    // SHOW Button
    showInput = () => {
        this.setState({
            secure: !this.state.secure,
        });
    }

    // any Activity Button
    pushItem = (element) => {
        for (let index = 0; index < this.state.pinCode.length; index++) {
            if(this.state.pinCode[index] == this.props.emptyFill){
                let pin = this.state.pinCode;
                pin[index] = element;
                this.setState({
                    pinCode: pin,
                });
                break;
            } 
        }
    }
    
    matchPin = () => { 
        if ( this.props.savedPin.length === this.state.pinCode.length 
            && this.state.pinCode[this.state.pinCode.length - 1] !== this.props.emptyFill) {
            if (this.state.match === false) {
                if (this.arraysEqual(this.props.savedPin, this.state.pinCode)) {
                    this.props.onSuccess();
                    this.setState({match: true});
                }  else {
                    this.props.onFailure();
                    this.setState({match: true});
                }
            }
        } 
    }

    arraysEqual = (a, b) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;

        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <PinScreen 
                    pinCode={this.state.pinCode}
                    secure={this.state.secure}
                    secureFill={this.props.secureFill}
                />
                <Keyboard 
                    data={this.props.data}
                    onPress={this.onPressActivity}
                />
            </View>
        );
    }
}

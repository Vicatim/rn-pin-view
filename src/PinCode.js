//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PinScreen from "./Parts/PinScreen.part"
import Keyboard from "./Parts/Keyboard.part"

// create a component

let currentPin = [5,6,3,7,4,7];
let pinLength = 6;

export default class PinCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            pinCode: new Array(pinLength).fill("_"),
            secure: true,
        };
    }
    onPressNumeral = ( element ) => {
        if (element == "DEL") {
            this.deleteItem();
        } else if (element == "SHOW") {
            this.showInput();
        } else {
            this.pushItem(element);
        }
    }
    deleteItem = () => {
        for (let index = this.state.pinCode.length - 1; index >= 0 ; index--) {
            if(this.state.pinCode[index] !== "_"){
                let pin = this.state.pinCode;
                pin[index] = "_";
                this.setState({
                    pinCode: pin,
                });
                break;
            }
        }
    }
    showInput = () => {
        this.setState({
            secure: !this.state.secure,
        });
    }
    check = () => {
        for (let index = 0; index < pinLength; index++) {
            if(this.state.pinCode[index] == null) {

            }
            
        }
    }
    pushItem = (element) => {
        for (let index = 0; index < this.state.pinCode.length; index++) {
            if(this.state.pinCode[index] == "_"){
                let pin = this.state.pinCode;
                pin[index] = element;
                this.setState({
                    pinCode: pin,

                });
                break;
            } 
        }
    }
    render() {

        const { data } = this.props;
        return (
            <View style={styles.container}>
                <PinScreen 
                    pinCode={this.state.pinCode}
                    secure={this.state.secure}
                    pinLength={pinLength}
                />
                <Text> leer </Text>
                <Text> leer </Text>
                <Text> leer </Text>
          
                <Keyboard 
                    data={data}
                    onPress={this.onPressNumeral}
                />
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
/** keyboard
 * 
	
	

 */

/** pinview
 * 
	addPinElement = () => {
		for (let index = 0; index < pin.length; index++) {
			if (pin[index] == "•" ) {
				pinRender[index] = this.createPinElement("@");
				this.setState({
					viewPinCode: pinRender,
				});
				pin[index] = "@";
				console.warn(pin);
				break;
			}	
		}
		return ( pin );
	}

	deletePinElement = () => {
		for (let index = pin.length -1 ; index >= 0; index-- ) {
			if (pin[index] !== "•" ) {
				pinRender[index] = this.createPinElement("•");
				this.setState({
					viewPinCode: pinRender,
				});
				pin[index] = "•";
				console.warn(pin);
				break;
			}	
		}
		return ( pin );
	}
 */
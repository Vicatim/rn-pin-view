//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default PinScreen = () => {

	let pin = [];
	let pinRender = [];
	createPinElement = ( element ) => {
		return(
			<View style={{margin: 5,}}>
				<Text style={{fontSize: 22}}
				onPress={() => deletePinElement()}
				
				>{element}</Text>
			</View>
		)
	}

	createPinConstruct = (pinLength) => {

			for (pinLength; pinLength > 0; pinLength--) {
				pin.push("T");
				pinRender.push( createPinElement("T") )
			}
			return (
				<View
				style={{flexDirection: "row",justifyContent: 'center', 
				alignItems: 'center',}}
				>
					{pinRender}
				</View>
			)
			
	}

	addPinElement = () => {
		for (let index = 0; index < pin.length; index++) {
			if (pin[index] == "T" ) {
				pinRender[index] = createPinElement("P");
				pin[index] = "P";
				console.warn(pin);
				break;
			}	
		}
		return ( pin );
	}

	deletePinElement = () => {
		for (let index = pin.length -1 ; index >= 0; index-- ) {
			if (pin[index] !== "T" ) {
				pinRender[index] = createPinElement("T");
				pin[index] = "T";
				console.warn(pin);
				break;
			}	
		}
		return ( pin );
	}

	return (

		<View>
			{createPinConstruct(8)}
			<Text onPress={() => addPinElement()}
			>pindwqwdqwdw</Text>
		</View>
	);

} 
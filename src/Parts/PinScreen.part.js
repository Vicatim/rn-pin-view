//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, FlatList } from 'react-native';

// import Style
import { defaultStyles as styles } from "../Styles/default.style"

const PinElement = ( { item, index, secure, secureFill} ) => {
	let char = "_";
	let result = (secure == true && item !== char) ? secureFill : item;
	return(
		<View style={styles.pinElement}>
			<Text style={styles.pinElementFont}
			>{ result }</Text>
		</View>
	)
};

export default PinScreen = ( { pinCode, pinLength, secure, secureFill } ) => {
	return (
		<View>
			<View
			style={styles.pinContainer}
			>
				<FlatList 
					scrollEnabled={ false }
					horizontal={ false }
					vertical={ true }
					numColumns={ 10 }
					data={ pinCode }
					renderItem={({item, index}) => <PinElement 
						item={item}
						index={index}
						secure={secure}
						secureFill={secureFill}
					/> }
					columnWrapperStyle={{justifyContent: "center",}}
				/>
			</View>
		</View>
	);	
} 

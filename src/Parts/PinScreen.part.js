//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, FlatList } from 'react-native';

// import Style
import { defaultStyles as styles } from "../Styles/default.style"

const PinElement = ( { item, index, secure} ) => {
	let char = "_";
	let result = (secure == true && item !== char) ? "•" : item;
	return(
		<View style={styles.pinElement}>
			<Text style={styles.pinElementFont}
			>{ result }</Text>
		</View>
	)
};

export default PinScreen = ( { pinCode, pinLength, secure } ) => {
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
					/> }
					columnWrapperStyle={{justifyContent: "center",}}
				/>
			</View>
		</View>
	);	
} 

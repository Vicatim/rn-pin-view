//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, FlatList } from 'react-native';

const PinElement = ( { item, index, secure} ) => {
	let char = "_";
	let result = (secure == true && item !== char) ? "•" : item;
	return(
		<View style={{margin: 5,}}>
			<Text style={{fontSize: 22}}
			>{ result }</Text>
		</View>
	)
};

export default PinScreen = ( { pinCode, pinLength, secure } ) => {
	return (
		<View>
			<View
			style={{flexDirection: "row",justifyContent: 'center', 
			alignItems: 'center',}}
			>
				<FlatList 
					scrollEnabled={ false }
					horizontal={ false }
					vertical={ true }
					numColumns={ pinLength }
					data={ pinCode }
					renderItem={({item, index}) => <PinElement 
						item={item}
						index={index}
						secure={secure}
					/> }
					columnWrapperStyle={{justifyContent: "center",}}
				/>
			</View>
			<Text>pindwqwdqwdw</Text>
		</View>
	);	
} 

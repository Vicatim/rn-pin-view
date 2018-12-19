//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, } from 'react-native';

//import Style
import { defaultStyles as styles } from "../Styles/default.style"

const NumeralElement = ( { item, index, onPress } ) => {
	return (
		<View style={styles.keyContainer}>
			<TouchableHighlight
				style={styles.touch} 
				onPress={() => onPress( item )}
				underlayColor={styles.container.backgroundColor}>
				<Text style={styles.fontSize}>
					{ item }
				</Text>
			</TouchableHighlight>
		</View>
	)
};

export default Keyboard = ( {data, onPress} ) => {
	return (
		<View style={styles.keyboardContainer}>
			<FlatList 
				scrollEnabled={ false }
				horizontal={ false }
				vertical={ true }
				numColumns={ 3 }
				data={ data }
				renderItem={({index, item}) => <NumeralElement 
					onPress={onPress} 
					item={item}
					index={index}/>}
				columnWrapperStyle={styles.keyboardListWrapper}
			/>
		</View>
	);
}



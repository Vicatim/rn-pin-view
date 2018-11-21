//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';

const NumeralElement = ( { item, index, onPress } ) => {
	console.log('g item', item);
	console.log('g index', index);
	return (
		<View style={styles.keyContainer}>
			<TouchableHighlight
				style={styles.touch} 
				onPress={() => onPress( item )}
				underlayColor={"orange"}>
				<Text style={styles.fontSize}>
					{ item }
				</Text>
			</TouchableHighlight>
		</View>
	)
};

export default Keyboard = ( {data, onPress} ) => {
	return (
		<View style={styles.container}>
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
				columnWrapperStyle={{justifyContent: "space-around",}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center', 
		alignItems: 'center',
	},
	keyContainer: {
		width: "27%",
		aspectRatio: 1,
		margin: 3,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 100,
	},
	touch: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center',
	},
	fontSize: {
		fontSize: 27,
	},
});

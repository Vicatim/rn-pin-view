//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';


export default Keyboard = () => {
	let data = [1,2,3,4,5,6,7,8,9, "del", 0, "show" ];	

	onPress = ( element ) => {
		if (element == "del") {
			this.deleteItem();
		} else if (element == "show") {
			this.showInput();
		} else {
			this.pushItem(element);
		}
	}
	
	deleteItem = () => {
		console.warn("minus");
	}

	showInput = () => {
		console.warn("open");
	}

	pushItem = (element) => {
		console.warn(element);	
	}

	numeralElement = ({ item, index }) => {
		return (
			<View style={styles.keyContainer}>
				<TouchableHighlight
					style={styles.touch} 
					onPress={() => this.onPress( item )}	
					underlayColor={"orange"}>
					<Text style={styles.fontSize}>
						{ item }
					</Text>
				</TouchableHighlight>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<FlatList 
				scrollEnabled={ false }
				horizontal={ false }
				vertical={ true }
				numColumns={ 3 }
				data={ data }
				renderItem={ numeralElement }
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

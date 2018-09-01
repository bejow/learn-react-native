import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const SmallButton = ({onButtonPress, text}) => {
	return (
		<TouchableOpacity style={styles.buttonStyle} onButtonPress={onButtonPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}

styles = {
	textStyle: {
		flex:1,
		padding:5
	},
	buttonStyle: {
		alignItems:'center',
		justifyContent: 'center',
		padding:5
	}
}

export {SmallButton};
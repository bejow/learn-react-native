import React from "react";
import {TextInput, View, Text} from 'react-native';

const Input = ({inputText, value, onChangeText, placeholder, secure}) => {
	const {inputStyle, textStyle, containerStyle} = styles;

	return(
		<View style={containerStyle}>
			<Text style={textStyle}>{inputText}</Text>
			<TextInput
				secureTextEntry={secure}
				autoCorrect={false}
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				style={inputStyle}
			/>
		</View>
		)
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},

	textStyle:{
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle:{
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export {Input};
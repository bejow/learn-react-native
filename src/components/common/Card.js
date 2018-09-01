import React from "react";
import {View, Platform, Text} from "react-native";

const Card = (props) => {

	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: "#BBB",
		borderBottomWidth: 0,
		elevation:1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		...Platform.select({
			ios:{
				shadowColor: '#000',
				shadowOffset: {width:0, height:2},
				shadowOpacity: 0.1,
				shadowRadius: 2
			},
			android:{
				elevation:1
			}
		})
	}
};

export {Card}
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SmallButton} from './common'

const VoteStatus = ({onButtonPress, score}) => {
	return(
		<View style={styles.containerStyle}>
			<SmallButton text='+' onButtonPress={onButtonPress}/>
			<Text>{score}</Text>
			<SmallButton text='-' onButtonPress={onButtonPress}/>
		</View>
		)
}

styles = {
	containerStyle: {
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	}
}

export default VoteStatus;
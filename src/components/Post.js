import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Post = ({content, score}) => {
	return (
		<View style={styles.containerStyle}>
			<VoteStatus/>
		</View>
		)
}

styles = {
	containerStyle:{
		flex:1,
		flexDirection: 'row',
		alignItems:'center',
		justifyContent: 'center'
	}
}

export default Post;
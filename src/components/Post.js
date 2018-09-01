import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import VoteStatus from './VoteStatus.js'

const Post = ({content, onButtonPress}) => {
	return (
		<View style={styles.containerStyle}>
			<VoteStatus onButtonPress={onButtonPress} score={content.score}/>
			<Text>{content.postContent}</Text>
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
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AppAlternative extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<ViewTest/>
			)
	}
}

const ViewTest = () => {
	return (
		<View style={styles.viewStyle1}>
			<Text>1</Text>
			<Text>2</Text>
			<Text>3</Text>
		</View>
	)
}

styles = {
	viewStyle1:{
		justifyContent:"space-between",
		flex:1,
		flexDirection: "row",
		backgroundColor:'#bbb'
	}
}

export default AppAlternative;
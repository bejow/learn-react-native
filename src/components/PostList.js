import React, {Component} from 'react';
import {View} from 'react-native';

const postsFromSomewhere = [
		{postContent:'Demo Content of an post', score:0},
		{postContent:'Another Post with diffrent Content and Score', score:2}
	]


class PostList extends Component{
	constructor(props){
		super(props);
		this.state = {posts:[]}
	}

	render(){
		return(

			)
	}
}

export default PostList;
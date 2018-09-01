import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection} from './common';
import Post from './Post';

const postsFromSomewhere = [
		{postContent:'Demo Content of an post', score:0},
		{postContent:'Another Post with diffrent Content and Score', score:2}
	]


class PostList extends Component{
	constructor(props){
		super(props);
		this.state = {posts:postsFromSomewhere};
	}

	renderPosts(){
		return this.state.posts.map((post) => {
			return (<Post 
				content={post}
				onButtonPress={console.log("pressed")}/> 
			);
		});
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Post content={{postContent:'blaaa', score:'12'}} onButtonPress={() => {console.log('pressed')}}/>
					{this.renderPosts()}
				</CardSection>
			</Card>
		)
	}
}

export default PostList;
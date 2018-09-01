import React, {Component} from 'react';
import {TextInput, Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
	constructor(props){
		super(props);
		this.state = { 
			email:'',
			password:'',
			error:'',
			loading:false
		}
	}

	onButtonPress() {
		const {email, password} = this.state;
		this.setState({error:'', loading:true});
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFailed.bind(this))
		});
	}

	renderButton() {
		if (this.state.loading){
			return <Spinner size="small" />
		}
		return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>

	}

	onLoginFailed(){
		this.setState({error:'Authentication Failed.', loading:false});

	}

	onLoginSuccess(){
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		})
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input placeholder="user@mail.com" inputText="Email" value={this.state.email} onChangeText={(email) => this.setState({email})}/>
				</CardSection>

				<CardSection>
					<Input secure placeholder="password" inputText="Password" value={this.state.password} onChangeText={(password) => this.setState({password})}/>
				</CardSection>
				
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle:{
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;
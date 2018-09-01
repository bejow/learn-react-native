import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase' //get this via >>npm install --save firebase
import {Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component{
	state = { loggedIn: null };

	componentWillMount(){
		//connecting with firebase project
  		firebase.initializeApp({
		    apiKey: "AIzaSyD-ts4XrtZw4MeqsvlpnZS7_AIOhxVSNZQ",
		    authDomain: "authentication-4ab60.firebaseapp.com",
		    databaseURL: "https://authentication-4ab60.firebaseio.com",
		    projectId: "authentication-4ab60",
		    storageBucket: "authentication-4ab60.appspot.com",
		    messagingSenderId: "179301393403"
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState( {loggedIn:true} );
			} else {
				this.setState( {loggedIn:false} );
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn){
			case true: 
				return(
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
					</CardSection>
				)
			case false:
				return <LoginForm/>;
			default:
				return (
					<View style={{justifyContent:'center', alignItems:'center'}}>
						<Spinner size='large'/>
					</View>
				)
		}
	}

	render(){
		return(
			<View>
				<Header headerText="Authentication"/>
					{this.renderContent()}
			</View>
		);	
	}
}

export default App;
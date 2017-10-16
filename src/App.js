import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/Login';
import firebase from 'firebase';

class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA7qIzHAmty55bQxpAW4pTKWZGS_IG--d4",
      authDomain: "pingredients-409c0.firebaseapp.com",
      databaseURL: "https://pingredients-409c0.firebaseio.com",
      projectId: "pingredients-409c0",
      storageBucket: "pingredients-409c0.appspot.com",
      messagingSenderId: "316540888185"
    })
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn : true})
      } else {
        this.setState({loggedIn : false})
      }
    })
  }
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm/>
      default:
        return  <View style={{paddingTop: 200}}>
                  <Spinner size="large"/>
                </View>
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

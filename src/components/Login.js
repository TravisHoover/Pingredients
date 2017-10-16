import React, { Component } from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {  email   : '',
    password : '',
    error    : '',
    loading  : false
  };
  
  onButtonPress() {
    const { email, password } = this.state;
    
    // this.setState({error: '', loading: true});
    // let provider = new firebase.auth.FacebookAuthProvider();
    //
    firebase.auth().signInWithRedirect('https://api.pinterest.com/oauth/?scope=read_public&client_id=4911971725215810382&state=768uyFys%20response_type=code&redirect_uri=https://pingredients-409c0.firebaseapp.com/__/auth/handler&response_type=code');
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
    })
  }
  
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }
  
  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }
  
  renderButton() {
    if(this.state.loading) {
      return <Spinner size={'small'}/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        
        <CardSection>
          <Input
            label="Password"
            placeholder="**********"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>
        
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;

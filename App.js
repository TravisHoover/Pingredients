import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/Login';

class App extends Component {
  state = { loggedIn: false };
  

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm/>;
      default:
        return  <View style={{paddingTop: 200}}>
                  <Spinner size="large"/>
                </View>
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

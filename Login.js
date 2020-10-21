import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {elephant} from './colors';
import NavigationService from './NavigationService';
import axios from 'axios';
import {rootURL} from './services';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {
    axios
      .post({url: `${rootURL}`, method: 'GET'})
      .then((res) => alert(res.data));

    NavigationService.navigate('Home');
  };

  render() {
    const {email, password} = this.state;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          {/* Add login components here. Don't forget to import components you need */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: elephant,
    // You might need some of them here, too:

    //
  },
  //Add remaining styles here:

  //
});

export default Login;

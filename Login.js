import React from 'react';
import axios from 'axios';
import {View, StyleSheet, StatusBar, Alert, Image, Text} from 'react-native';
import {elephant, white} from './colors';
import {_storeData} from './localStorage';
import NavigationService from './NavigationService';
import {rootURL} from './services';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {
    const {email, password} = this.state;

    axios({
      url: `${rootURL}/login`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    })
      .then(async (res) => {
        await _storeData('token', res.data.authToken);
        NavigationService.navigate('Home');
      })
      .catch((e) => {
        Alert.alert('Wrong credentials');
      });
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./Logo.png')} />
          <Text style={styles.mainTitle}>Login</Text>
          {/* Add login components here. Don't forget to import components you need */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 150,
    alignItems: 'center',
    height: '100%',
    backgroundColor: elephant,
    // You might need some of them here, too:

    //
  },
  logo: {
    marginBottom: 80,
    alignSelf: 'center',
  },
  mainTitle: {
    alignSelf: 'flex-start',
    color: white,
    fontSize: 20,
  },
  //Add remaining styles here:

  //
});

export default Login;

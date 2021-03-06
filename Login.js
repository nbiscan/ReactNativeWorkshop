import React from 'react';
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

    fetch(`${rootURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        await _storeData('token', res.authToken);
        NavigationService.navigate('Home');
      })
      .catch((e) => {
        Alert.alert(e);
      });

    NavigationService.navigate('Home');
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

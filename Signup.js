import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import NavigationService from './NavigationService';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSignup() {
    // axios
    //   .post({url: 'localhost:3000/buildingconfig', method: 'GET'})
    //   .then((res) => alert(res.data));

    NavigationService.navigate('Home');
  }

  render() {
    const {email, password, name} = this.state;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.background} />
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Create account:</Text>
          <TextInput
            style={styles.email}
            placeholder="username"
            onChangeText={(name) => this.setState({name})}
            value={name}
          />
          <TextInput
            style={styles.email}
            placeholder="email"
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({email})}
            value={email}
          />
          <TextInput
            style={styles.email}
            placeholder="password"
            autoCompleteType="password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(password) => this.setState({password})}
            value={password}
          />
          <TouchableOpacity onPress={this.handleSignup} style={styles.btn}>
            <Text style={styles.title}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate('Login')}>
            <Text style={styles.login}>Have account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#0f293b',
    height: '100%',
    padding: 30,
  },
  background: {
    backgroundColor: '#f76c57',
    height: '15%',
    zIndex: 1,
  },
  login: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  mainTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Verdana',
    color: '#f76c57',
  },
  title: {
    fontFamily: 'Verdana',
    color: '#0f293b',
  },
  email: {
    backgroundColor: 'white',
    padding: 10,
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderRadius: 40,
  },
  btn: {
    width: 100,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f76c57',
  },
});

export default Signup;

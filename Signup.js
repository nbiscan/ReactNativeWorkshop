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
import {elephant, persimmon, white} from './colors';

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
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Create an account:</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={(name) => this.setState({name})}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({email})}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            autoCompleteType="password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(password) => this.setState({password})}
            value={password}
          />
          <TouchableOpacity onPress={this.handleSignup} style={styles.btn}>
            <Text style={styles.title}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate('Login')}>
            <Text style={styles.login}>
              Have an account? <Text style={styles.link}>Log in</Text>
            </Text>
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
    backgroundColor: elephant,
    height: '100%',
    padding: 24,
  },
  login: {
    color: white,
    fontSize: 16,
    marginTop: 20,
  },
  mainTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    color: white,
  },
  title: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: persimmon,
  },
  input: {
    backgroundColor: white,
    padding: 16,
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderRadius: 60,
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: persimmon,
  },
});

export default Signup;

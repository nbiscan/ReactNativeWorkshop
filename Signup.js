import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import NavigationService from './NavigationService';
import {elephant, persimmon, white} from './colors';
import {rootURL} from './services';
import {_storeData} from './localStorage';
import axios from 'axios';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSignup = () => {
    axios({
      url: `${rootURL}/signup`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      },
    })
      .then(async (res) => {
        await _storeData('token', res.data.authToken);
        NavigationService.navigate('Home');
      })
      .catch((e) => {
        Alert.alert('Something went wrong');
      });
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./Logo.png')} />
          <Text style={styles.mainTitle}>Create an account:</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={(nameValue) => this.setState({name: nameValue})}
            value={this.state.name}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={(emailValue) => this.setState({email: emailValue})}
            value={this.state.email}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            autoCompleteType="password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(passwordValue) =>
              this.setState({password: passwordValue})
            }
            value={this.state.password}
          />
          <TouchableOpacity
            onPress={() => this.handleSignup()}
            style={styles.btn}>
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
    paddingTop: 140,
    backgroundColor: elephant,
    height: '100%',
    padding: 24,
  },
  logo: {
    marginBottom: 80,
    alignSelf: 'center',
  },
  login: {
    alignSelf: 'center',
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

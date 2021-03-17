import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, FlatList, Text} from 'react-native';
import {elephant, white} from './colors';
import {_retrieveData} from './localStorage';
import {rootURL} from './services';
import axios from 'axios';

class First extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#f76c57',
    },
  };

  state = {
    tasks: [],
    newTask: '',
  };

  async componentDidMount() {
    const token = await _retrieveData('token');
    // axios({
    //   url: `${rootURL}/tasks`,
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //  finish axios call which gets tasks by saving them to state

    //
  }

  createNew = (text) => {
    // add API call to create new tasks here
    // Make sure to add Content-type: 'application/json' as one of the headers
    //
  };

  renderItem = ({item}) => (
    <View style={styles.item}>
      {/* Add components in 1 item of the list (task)
      Remember that you can access needed data using `item` sent using props */}
      <Text>{item.text}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.title}>Create a new task:</Text>
          {/* Add necessary components here */}

          {/* */}
          {/* Use provided flatlist to render tasks fetched and saved in state */}
          <FlatList
            style={styles.list}
            data={this.state.tasks}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 68,
    padding: 24,
    backgroundColor: elephant,
    // You might need some of them here, too:

    //
  },
  list: {marginTop: 24},
  title: {fontSize: 20, color: white},
  //insert styles below

  //
});

export default First;

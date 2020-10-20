import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, FlatList} from 'react-native';
import {elephant} from './colors';
import {_retrieveData} from './localStorage';
import axios from 'axios';

class First extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#f76c57',
    },
  };

  state = {
    tasks: [
      {id: 1, text: 'First', authorUsername: 'natko'},
      {id: 2, text: 'Second', authorUsername: 'natko'},
    ],
    newTask: '',
  };

  componentDidMount() {
    // add axios call to fetch existing tasks here
    //
    // axios({
    //   url: `localhost:3000/tasks`,
    //   headers: {token: _retrieveData('token')},
    //   method: 'GET',
    // }).then((res) => this.setState({tasks: res.data}));
  }

  createNew = (text) => {
    this.setState((state) => {
      const tasks = state.tasks.concat([
        {text, id: state.tasks.lenght, authorUsername: 'natko'},
      ]);
      return {
        tasks,
      };
    });

    // use axios and PUT method to create new task
  };

  renderItem = ({item}) => (
    <View style={styles.item}>
      {/* Add components in 1 item of the list (task)
      Remember that you can access needed data using `item` sent using props */}
    </View>
  );

  render() {
    const {newTask, tasks} = this.state;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          {/* Add necessary components here */}

          {/* Use provided flatlist to render tasks fetched and saved in state */}
          <FlatList
            style={styles.list}
            data={tasks}
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
  },
  list: {marginTop: 24},
  //insert styles below

  //
});

export default First;

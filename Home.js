import React, {Component} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NavigationService from './NavigationService';

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

  createNew = (text) => {
    this.setState((prevState) => {
      tasks: prevState.tasks.push({
        text,
        id: prevState.tasks.lenght,
        authorUsername: 'natko',
      });
    });
  };

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.task}>Author: {item.authorUsername}</Text>
      <Text style={styles.task}>Task: {item.text}</Text>
    </View>
  );

  render() {
    const {newTask, tasks} = this.state;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <TextInput
            style={styles.inputTxt}
            placeholder="new task"
            onChangeText={(newTask) => this.setState({newTask})}
            value={newTask}
          />
          <TouchableOpacity
            onPress={() => this.createNew(newTask)}
            style={styles.btn}>
            <Text style={styles.plus}>Create a new task</Text>
          </TouchableOpacity>
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
    backgroundColor: '#0f293b',
    height: '100%',
    padding: 60,
  },
  task: {
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'white',
  },
  list: {marginTop: 60},
  item: {marginBottom: 100},
  inputTxt: {
    backgroundColor: 'white',
    padding: 10,
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderRadius: 40,
  },
  background: {
    backgroundColor: '#f76c57',
    height: '5%',
    zIndex: 1,
  },
  title: {
    marginTop: 200,
    fontFamily: 'Verdana',
    fontSize: 40,
    color: 'white',
  },
  plus: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  btn: {
    borderRadius: 40,
    backgroundColor: '#f76c57',
    padding: 10,
  },
});

export default First;

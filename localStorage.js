import {Alert, AsyncStorage} from 'react-native';
// import {AsyncStorage} from '@react-native-community/async-storage';

export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    Alert.alert(error);
  }
};

export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key, (err, item) => item);
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    // Error retrieving data
    Alert.alert(error);
  }
};

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';

const rootNavi = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Signup',
  },
);

export default createAppContainer(rootNavi);

// @flow
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import CheckList from './CheckList';
import StudentInfo from './StudentInfo';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'DOUBLE tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

const StudentTabs = createBottomTabNavigator({ CheckList, StudentInfo }, {
  initialRouteName: 'StudentInfo'
});

const StudentStack = createStackNavigator({ StudentTabs });

export default StudentStack;

// @flow
import { createSwitchNavigator } from 'react-navigation';
import { Authentication as Auth } from './Authentication';
import { Dean } from './Dean';
import { Lecturer } from './Lecturer';
import { Student } from './Student';

// $FlowFixMe property ignoredYellowBox is missing
console.ignoredYellowBox = ['Warning: isMounted']; // eslint-disable-line no-console

const AppNavigator = createSwitchNavigator(
  {
    Auth,
    Lecturer,
    Dean,
    Student
  },
  {
    initialRouteName: 'Auth'
  }
);

export default AppNavigator;

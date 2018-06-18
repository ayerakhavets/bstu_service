// @flow
import { createSwitchNavigator } from 'react-navigation';
import { Authentication } from './Authentication';
import { Dean } from './Dean';
import { Lecturer } from './Lecturer';
import { Student } from './Student';

// $FlowFixMe property ignoredYellowBox is missing
console.ignoredYellowBox = ['Warning: isMounted']; // eslint-disable-line no-console

export default createSwitchNavigator(
  {
    Auth: Authentication,
    Lecturer,
    Dean,
    Student
  },
  {
    initialRouteName: 'Auth'
  }
);

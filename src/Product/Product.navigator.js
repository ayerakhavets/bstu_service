// @flow
import { createSwitchNavigator } from 'react-navigation';
import { Authentication } from './Authentication';
import DeanStack from './Dean';
import { Student } from './Student';

// $FlowFixMe property ignoredYellowBox is missing
console.ignoredYellowBox = ['Warning: isMounted']; // eslint-disable-line no-console

export default createSwitchNavigator(
  {
    Auth: Authentication,
    Dean: DeanStack,
    Student
  },
  {
    initialRouteName: 'Auth'
  }
);

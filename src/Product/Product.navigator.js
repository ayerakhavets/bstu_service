// @flow
import { createSwitchNavigator } from 'react-navigation';
import { Authentication } from './Authentication';
import DeanStack from './Dean';
import StudentTabs from './Student';

export default createSwitchNavigator(
  {
    Auth: Authentication,
    Dean: DeanStack,
    Student: StudentTabs
  },
  {
    initialRouteName: 'Auth'
  }
);

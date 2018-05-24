// @flow
import { createSwitchNavigator } from 'react-navigation';
import { LogIn, PreAuthentication } from './Authentication';
import DeanStack from './Dean';
import StudentTabs from './Student';

export default createSwitchNavigator(
  {
    Auth: LogIn,
    Dean: DeanStack,
    PreAuth: PreAuthentication,
    Student: StudentTabs
  },
  {
    initialRouteName: 'Auth'
  }
);

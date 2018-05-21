import { createSwitchNavigator } from 'react-navigation';
import { LogIn, PreAuthentication } from './Authentication';
import DeanStack from './Dean';
import StudentStack from './Student';

export default createSwitchNavigator(
  {
    Auth: LogIn,
    Dean: DeanStack,
    PreAuth: PreAuthentication,
    Student: StudentStack
  },
  {
    initialRouteName: 'PreAuth'
  }
);

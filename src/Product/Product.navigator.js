// @flow
import { createSwitchNavigator } from 'react-navigation';
import { Authentication } from './Authentication';
import { Dean } from './Dean';
import { Lecturer } from './Lecturer';
import { Student } from './Student';
import {
  AUTHENTICATION,
  DEAN_ROUTE,
  LECTURER_ROUTE,
  STUDENT_ROUTE
} from './Product.constants';

export default createSwitchNavigator({
  [AUTHENTICATION]: Authentication,
  [DEAN_ROUTE]: Dean,
  [LECTURER_ROUTE]: Lecturer,
  [STUDENT_ROUTE]: Student
});

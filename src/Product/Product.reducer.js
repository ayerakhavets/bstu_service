// @flow
import { combineReducers } from 'redux';
import { logInReducer, type LogInState } from './Authentication';
import { studentReducer, type StudentState } from './Student';

export type ApplicationState = {
  logInReducer: LogInState,
  studentReducer: StudentState
}

export default combineReducers({
  logInReducer,
  studentReducer
});

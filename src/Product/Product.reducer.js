// @flow
import { combineReducers } from 'redux';
import { logInReducer, type LogInState } from './Authentication';

export type ApplicationState = {
  logInReducer: LogInState
}

export default combineReducers({
  logInReducer
});

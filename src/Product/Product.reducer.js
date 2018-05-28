// @flow
import { combineReducers } from 'redux';
import { authenticationReducer } from './Authentication';
import { studentReducer } from './Student';

export default combineReducers({
  authentication: authenticationReducer,
  studentReducer
});

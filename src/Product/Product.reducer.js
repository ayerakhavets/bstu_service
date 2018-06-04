// @flow
import { combineReducers } from 'redux';
import { authenticationReducer } from './Authentication';
import { deanReducer } from './Dean';
import { studentReducer } from './Student';

export default combineReducers({
  authentication: authenticationReducer,
  dean: deanReducer,
  student: studentReducer
});

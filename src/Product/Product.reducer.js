// @flow
import { combineReducers } from 'redux';
import { authenticationReducer } from './Authentication';
import { deanReducer } from './Dean';
import { lecturerReducer } from './Lecturer';
import { studentReducer } from './Student';

export default combineReducers({
  authentication: authenticationReducer,
  dean: deanReducer,
  lecturer: lecturerReducer,
  student: studentReducer
});

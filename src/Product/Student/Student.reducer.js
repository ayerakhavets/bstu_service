// @flow
import { combineReducers } from 'redux';
import { studentInfoReducer, type StudentInfoState } from './StudentInfo';

export type StudentState = {
  studentInfoReducer: StudentInfoState
}

export default combineReducers({
  studentInfoReducer
});

// @flow
import { combineReducers } from 'redux';
import { studentInfoReducer, type StudentInfoState } from './StudentInfo';
import { checkListReducer, type CheckListState } from './CheckList';

export type StudentState = {
  studentInfoReducer: StudentInfoState,
  checkListReducer: CheckListState
}

export default combineReducers({
  studentInfoReducer,
  checkListReducer
});

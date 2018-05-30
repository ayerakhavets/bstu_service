// @flow
import StudentInfo from './StudentInfo.component';
import studentInfoReducer, { type StudentInfoState } from './StudentInfo.reducer';
import studentInfoSaga from './StudentInfo.saga';
import { changeUserInfo } from './StudentInfo.actions';

export {
  changeUserInfo,
  StudentInfo,
  studentInfoReducer,
  studentInfoSaga
};

export type {
  StudentInfoState
};

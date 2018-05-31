// @flow
import StudentInfo from './StudentInfo.component';
import studentInfoReducer, { type StudentInfoState } from './StudentInfo.reducer';
import studentInfoSaga from './StudentInfo.saga';
import { changeUserInfo, clearStudentInfo } from './StudentInfo.actions';

export {
  changeUserInfo,
  clearStudentInfo,
  StudentInfo,
  studentInfoReducer,
  studentInfoSaga
};

export type {
  StudentInfoState
};

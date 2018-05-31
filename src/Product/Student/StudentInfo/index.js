// @flow
import StudentInfo from './StudentInfo.component';
import studentInfoReducer, { type StudentInfoState } from './StudentInfo.reducer';
import studentInfoSaga from './StudentInfo.saga';
import { LOG_OUT, changeUserInfo } from './StudentInfo.actions';

export {
  LOG_OUT,
  changeUserInfo,
  StudentInfo,
  studentInfoReducer,
  studentInfoSaga
};

export type {
  StudentInfoState
};

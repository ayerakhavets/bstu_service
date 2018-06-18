// @flow
import StudentInfo from './StudentInfo.component';
import { selectUid } from './StudentInfo.selectors';
import studentInfoReducer, { type StudentInfoState } from './StudentInfo.reducer';
import studentInfoSaga from './StudentInfo.saga';
import { changeUserInfo, clearStudentInfo } from './StudentInfo.actions';

export {
  changeUserInfo,
  clearStudentInfo,
  StudentInfo,
  studentInfoReducer,
  studentInfoSaga,
  selectUid
};

export type {
  StudentInfoState
};

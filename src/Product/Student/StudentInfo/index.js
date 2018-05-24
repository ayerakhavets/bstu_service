// @flow
import StudentInfo from './StudentInfo.component';
import studentInfoReducer, { type StudentInfoState } from './StudentInfo.reducer';
import studentInfoSaga from './StudentInfo.saga';

export default StudentInfo;

export {
  studentInfoReducer,
  studentInfoSaga
};

export type {
  StudentInfoState
};

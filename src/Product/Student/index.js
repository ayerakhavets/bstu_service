// @flow
import studentReducer, { type StudentState } from './Student.reducer';
import studentSaga from './Student.saga';
import Student from './Student.navigator';
import { changeUserInfo } from './StudentInfo';

export {
  changeUserInfo,
  Student,
  studentReducer,
  studentSaga
};

export type { StudentState };

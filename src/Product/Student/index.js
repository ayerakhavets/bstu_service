// @flow
import StudentTabs from './Student.navigator';
import studentReducer, { type StudentState } from './Student.reducer';
import studentSaga from './Student.saga';
import { changeUserInfo } from './StudentInfo';

export default StudentTabs;

export {
  changeUserInfo,
  studentReducer,
  studentSaga
};

export type {
  StudentState
};

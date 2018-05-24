// @flow
import StudentStack from './Student.navigator';
import studentReducer, { type StudentState } from './Student.reducer';
import studentSaga from './Student.saga';

export default StudentStack;

export {
  studentReducer,
  studentSaga
};

export type {
  StudentState
};

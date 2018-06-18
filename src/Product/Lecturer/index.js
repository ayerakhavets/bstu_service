// @flow
import Lecturer from './Lecturer.navigator';
import lecturerReducer, { type LecturerState } from './Lecturer.reducer';
import lecturerSaga from './Lecturer.saga';

export {
  Lecturer,
  lecturerReducer,
  lecturerSaga
};

export type {
  LecturerState
};

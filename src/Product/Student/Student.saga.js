// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { studentInfoSaga } from './StudentInfo';

export default function* studentSaga(): Saga<void> {
  yield fork(studentInfoSaga);
}

// @flow
import { type Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { authenticationSaga } from './Authentication';
import { studentSaga } from './Student';
import { lecturerSaga } from './Lecturer';
import { deanSaga } from './Dean';

export default function* rootSaga(): Saga<void> {
  yield all([
    authenticationSaga(),
    studentSaga(),
    lecturerSaga(),
    deanSaga()
  ]);
}

// @flow
import { type Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { authenticationSaga } from './Authentication';
import { studentSaga } from './Student';

export default function* rootSaga(): Saga<void> {
  yield all([
    authenticationSaga(),
    studentSaga()
  ]);
}

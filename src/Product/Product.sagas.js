// @flow
import { type Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { logInSaga } from './Authentication';

export default function* rootSaga(): Saga<void> {
  yield all([
    logInSaga()
  ]);
}

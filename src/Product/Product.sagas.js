import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { authenticationSaga } from './Authentication';

export function* helloSaga() {
  yield delay(1000);
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    authenticationSaga()
  ]);
}

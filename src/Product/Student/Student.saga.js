// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { checkListSaga } from './CheckList';
import { studentInfoSaga } from './StudentInfo';

export default function* studentSaga(): Saga<void> {
  yield fork(checkListSaga);
  yield fork(studentInfoSaga);
}

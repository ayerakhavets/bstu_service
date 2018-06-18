// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { orderSaga } from './Order';
import { orderListSaga } from './OrderList';
import { studentListSaga } from './StudentList';
import { subjectListSaga } from './SubjectList';

export default function* lecturerSaga(): Saga<void> {
  yield fork(orderSaga);
  yield fork(orderListSaga);
  yield fork(studentListSaga);
  yield fork(subjectListSaga);
}

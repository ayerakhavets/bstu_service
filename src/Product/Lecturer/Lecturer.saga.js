// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { subjectListSaga } from './SubjectList';
import { orderListSaga } from './OrderList';
import { orderSaga } from './Order';
import { studentListSaga } from './StudentList';

export default function* lecturerSaga(): Saga<void> {
  yield fork(subjectListSaga);
  yield fork(orderListSaga);
  yield fork(orderSaga);
  yield fork(studentListSaga);
}

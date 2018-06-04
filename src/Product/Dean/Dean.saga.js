// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { studentListSaga } from './StudentList';
import { courseListSaga } from './CourseList';
import { paymentListSaga } from './PaymentList';

export default function* deanSaga(): Saga<void> {
  yield fork(studentListSaga);
  yield fork(courseListSaga);
  yield fork(paymentListSaga);
}

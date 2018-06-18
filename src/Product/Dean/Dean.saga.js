// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { courseListSaga } from './CourseList';
import { paymentListSaga } from './PaymentList';
import { orderListSaga } from './OrderList';
import { paymentSaga } from './Payment';
import { studentListSaga } from './StudentList';

export default function* deanSaga(): Saga<void> {
  yield fork(courseListSaga);
  yield fork(orderListSaga);
  yield fork(paymentListSaga);
  yield fork(paymentSaga);
  yield fork(studentListSaga);
}

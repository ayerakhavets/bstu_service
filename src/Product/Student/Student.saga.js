// @flow
import { type Saga } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { paymentSaga } from './Payment';
import { paymentListSaga } from './PaymentList';
import { studentInfoSaga } from './StudentInfo';

export default function* studentSaga(): Saga<void> {
  yield fork(paymentSaga);
  yield fork(paymentListSaga);
  yield fork(studentInfoSaga);
}

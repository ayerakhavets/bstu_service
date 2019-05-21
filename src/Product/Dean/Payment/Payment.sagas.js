// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import {
  resolvePayment,
  removePayment,
  handleReslovePayment
} from '../Dean.api';
import { loadPaymentListRequest } from '../PaymentList';
import {
  REMOVE_PAYMENT_REQUEST,
  APPROVE_PAYMENT_REQUEST,
  DECLINE_PAYMENT_REQUEST,
  approvePaymentFailure,
  approvePaymentSuccess,
  declinePaymentFailure,
  declinePaymentSuccess,
  removePaymentFailure,
  removePaymentSuccess
} from './Payment.actions';
import {
  selectStartDate,
  selectEndDate,
  selectLecturer,
  selectSubject,
  selectImage,
  selectKey
} from './Payment.selectors';
import { selectCurrentStudent } from '../StudentList';


export default function* paymentSaga(): Saga<void> {
  yield takeEvery(REMOVE_PAYMENT_REQUEST, handleRemovePayment);
  yield takeEvery([APPROVE_PAYMENT_REQUEST, DECLINE_PAYMENT_REQUEST], handlePayment);
}

export function* handleRemovePayment(): Saga<void> {
  const image = yield select(selectImage);
  const key = yield select(selectKey);
  const { uid } = yield select(selectCurrentStudent);

  const databasePath = `${uid}/${key}`;
  const storagePath = `${key}/${image.name}`;

  try {
    yield call(removePayment, databasePath, storagePath);
    NavigatorActions.back();
    yield put(removePaymentSuccess());
    yield put(loadPaymentListRequest());
    Toast.show('Платёж удалён');
  } catch (error) {
    yield put(removePaymentFailure());
    Toast.show('Ошибка при удалении данных');
  }
}

export function* handlePayment({ type }: any): Saga<void> {
  // APPROVE_PAYMENT_REQUEST
  // DECLINE_PAYMENT_REQUEST
  let status;
  let successAction;
  let failureAction;
  let resultPhrase;

  if (type === APPROVE_PAYMENT_REQUEST) {
    status = 'approved';
    successAction = approvePaymentSuccess;
    failureAction = approvePaymentFailure;
    resultPhrase = 'Платёж одобрен';
  } else {
    status = 'declined';
    successAction = declinePaymentSuccess;
    failureAction = declinePaymentFailure;
    resultPhrase = 'Платёж отклонён';
  }
  const key = yield select(selectKey);
  const student = yield select(selectCurrentStudent);

  try {
    if (type === APPROVE_PAYMENT_REQUEST) {
      const startDate = yield select(selectStartDate);
      const endDate = yield select(selectEndDate);
      const lecturer = yield select(selectLecturer);
      const subject = yield select(selectSubject);

      const order = {
        student,
        startDate,
        endDate,
        lecturer,
        subject,
        status: 'planning',
        key,
        date: '',
        mark: ''
      };

      yield call(handleReslovePayment, student.uid, key, order, student);
    } else {
      yield call(resolvePayment, student.uid, key, status);
    }

    NavigatorActions.back();
    yield put(successAction());
    yield put(loadPaymentListRequest());
    Toast.show(resultPhrase);
  } catch (error) {
    // TODO: add error info to action.
    yield put(failureAction());
    Toast.show('Ошибка');
  }
}

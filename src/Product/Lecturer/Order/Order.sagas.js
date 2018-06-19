// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '../../../Services';
import {
  setOrder,
  closeOrder
} from '../Lecturer.api';
import { loadOrderListRequest } from '../OrderList';
import {
  APPROVE_ORDER_REQUEST,
  CLOSE_ORDER_REQUEST,
  approveOrderFailure,
  approveOrderSuccess,
  closeOrderFailure,
closeOrderSuccess
} from './Order.actions';
import {
  selectMark,
  selectKey,
  selectDate
} from './Order.selectors';
import { selectCurrentStudent } from '../StudentList';


export default function* orderSaga(): Saga<void> {
  yield takeEvery(APPROVE_ORDER_REQUEST, handlePayment);
  yield takeEvery(CLOSE_ORDER_REQUEST, handleOrderClose);
}

export function* handleOrderClose(): Saga<void> {
  // APPROVE_ORDER_REQUEST
  // DECLINE_PAYMENT_REQUEST
  let successAction;
  let failureAction;
  let resultPhrase = 'Пересдача закрыта';

  const key = yield select(selectKey);
  const mark = yield select(selectMark);
  const student = yield select(selectCurrentStudent);

  try {
    yield call(closeOrder, student.uid, key, mark);

    NavigatorActions.back();
    yield put(closeOrderSuccess());
    yield put(loadOrderListRequest());
    Toast.show(resultPhrase);
  } catch (error) {
    yield put(closeOrderFailure());
    Toast.show('Ошибка');
  }
}

export function* handlePayment({ type }): Saga<void> {
  // APPROVE_ORDER_REQUEST
  // DECLINE_PAYMENT_REQUEST

  let successAction;
  let failureAction;
  let resultPhrase;


    successAction = approveOrderSuccess;
    failureAction = approveOrderFailure;
    resultPhrase = 'Дата сдачи назначена';

  const key = yield select(selectKey);
  const student = yield select(selectCurrentStudent);

  try {
    const date = yield select(selectDate);
    yield call(setOrder, student.uid, key, date);

    NavigatorActions.back();
    yield put(successAction());
    yield put(loadOrderListRequest());
    Toast.show(resultPhrase);
  } catch (error) {
    yield put(failureAction());
    Toast.show('Ошибка');
  }
}

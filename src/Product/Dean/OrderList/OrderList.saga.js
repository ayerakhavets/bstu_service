// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '../../../Services';
import { selectUid } from '../../Authentication';
import { getOrderList } from '../Lecturer.api';
import { changePaymentData } from '../Order';
import {
  LOAD_ORDER_LIST_REQUEST,
  OPEN_ORDER_INFO,
  loadOrderListFailure,
  loadOrderListSuccess,
  type OpenShowPaymentScreenAction
} from './OrderList.actions';

export const PAYMENT = 'Платёж';

export default function* paymentListSaga(): Saga<void> {
  yield takeEvery(LOAD_ORDER_LIST_REQUEST, handleLoadOrderList);
  yield takeEvery(OPEN_ORDER_INFO, handleOpenShowPaymentScreen);
}

export function* handleOpenShowPaymentScreen({ payload }: OpenShowPaymentScreenAction): Saga<void> {
  yield put(changePaymentData(payload));
  // FIXME: use constants for params.
  NavigatorActions.navigate(PAYMENT);
}

export function* handleLoadOrderList(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const orderListReponse = yield call(getOrderList, uid);
    if (orderListReponse) {
      yield put(loadOrderListSuccess(Object.values(orderListReponse)));
    } else {
      yield put(loadOrderListSuccess([]));
    }
  } catch (error) {
    yield put(loadOrderListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

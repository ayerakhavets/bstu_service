// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getOrderList } from '../Lecturer.api';
import { changeOrderData } from '../Order';
import { selectCurrentStudent } from '../StudentList';
import {
  LOAD_ORDER_LIST_REQUEST,
  OPEN_ORDER_INFO,
  loadOrderListFailure,
  loadOrderListSuccess,
  type OpenOrderInfoAction
} from './OrderList.actions';
import type { OrderData } from '../../types';

export const ORDER = 'ORDER.Lecturer';

export default function* orderListSaga(): Saga<void> {
  yield takeEvery(LOAD_ORDER_LIST_REQUEST, handleLoadOrderList);
  yield takeEvery(OPEN_ORDER_INFO, handleOpenShowPaymentScreen);
}

export function* handleOpenShowPaymentScreen({ payload }: OpenOrderInfoAction): Saga<void> {
  yield put(changeOrderData(payload));
  yield call(NavigatorActions.navigate, ORDER);
}

export function* handleLoadOrderList(): Saga<void> {
  const { uid } = yield select(selectCurrentStudent);

  try {
    const orderListReponse: Object[] = yield call(getOrderList, uid);
    if (orderListReponse) {
      const orders: OrderData[] = (Object.values(orderListReponse): Object[]);
      yield put(loadOrderListSuccess(orders));
    } else {
      yield put(loadOrderListSuccess([]));
    }
  } catch (error) {
    yield put(loadOrderListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

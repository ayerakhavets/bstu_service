// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getOrderList } from '../Dean.api';
import { changeOrderData } from '../Order';
import { selectCurrentStudent } from '../StudentList';
import {
  LOAD_ORDER_LIST_REQUEST,
  OPEN_ORDER_INFO,
  loadOrderListFailure,
  loadOrderListSuccess,
  type OpenShowPaymentScreenAction
} from './OrderList.actions';

export const ORDER = 'ORDER.Dean';

export default function* orderListSaga(): Saga<void> {
  yield takeEvery(LOAD_ORDER_LIST_REQUEST, handleLoadOrderList);
  yield takeEvery(OPEN_ORDER_INFO, handleOpenShowPaymentScreen);
}

export function* handleOpenShowPaymentScreen({ payload }: OpenShowPaymentScreenAction): Saga<void> {
  yield put(changeOrderData(payload));
  NavigatorActions.navigate(ORDER);
}

export function* handleLoadOrderList(): Saga<void> {
  const { uid } = yield select(selectCurrentStudent);

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

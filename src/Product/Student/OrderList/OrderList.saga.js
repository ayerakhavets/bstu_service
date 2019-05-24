// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getOrderList } from '../Student.api';
import { changeOrderData } from '../Order';
import { selectUid } from '../StudentInfo';
import {
  LOAD_ORDER_LIST_REQUEST,
  OPEN_ORDER_INFO,
  loadOrderListFailure,
  loadOrderListSuccess,
  type OpenOrderInfoAction
} from './OrderList.actions';
import { type OrderData } from '../../types';
import { ORDER_ROUTE } from '../Student.constants';

export default function* orderListSaga(): Saga<void> {
  yield takeEvery(LOAD_ORDER_LIST_REQUEST, handleLoadOrderList);
  yield takeEvery(OPEN_ORDER_INFO, handleOpenShowPaymentScreen);
}

export function* handleOpenShowPaymentScreen({ payload }: OpenOrderInfoAction): Saga<void> {
  yield put(changeOrderData(payload));
  yield call(NavigatorActions.navigate, ORDER_ROUTE);
}

export function* handleLoadOrderList(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const orderListReponse = yield call(getOrderList, uid);
    if (orderListReponse) {
      // TODO: refactor the type (according to the comment below).
      const orderList: OrderData[] = (Object.values(orderListReponse): any);
      yield put(loadOrderListSuccess(orderList));
    } else {
      yield put(loadOrderListSuccess([]));
    }
  } catch (error) {
    yield put(loadOrderListFailure());
    yield call(Toast.show, 'Ошибка загрузки данных');
  }
}

/*
date : "17 05 2019"
endDate : "17 05 2019"
key : "-LexXCWddzoJQ5KVFs6o"
lecturer : "Иванов И. И"
mark : "9"
startDate : "16 05 2019"
status : "closed"
student : Object
course : "4"
email : "user@mail.com"
faculty : "ФИТ"
middleName : "vlad"
name : "alexa"
specialty : "ПОиБМС"
studentId : "12378945"
surname : "yero"
uid : "4FOnlGl0rdNFq9w8GmBkafrqqAO2"
__proto__ : Object
subject : "СУБД"
*/

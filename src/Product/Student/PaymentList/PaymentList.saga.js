// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '../../../Services';
import { selectUid } from '../../Authentication';
import { getPaymentList, getPaymentImageUrl } from '../Student.api';
import { changePaymentData, clearPaymentData } from '../Payment';
import {
  LOAD_PAYMENT_LIST_REQUEST,
  OPEN_ADD_PAYMENT_SCREEN,
  OPEN_SHOW_PAYMENT_SCREEN,
  loadPaymentListFailure,
  loadPaymentListSuccess,
  type OpenShowPaymentScreenAction
} from './PaymentList.actions';

export const PAYMENT = 'Чек';

export default function* paymentListSaga(): Saga<void> {
  yield takeEvery(LOAD_PAYMENT_LIST_REQUEST, handleLoadPaymentList);
  yield takeEvery(OPEN_SHOW_PAYMENT_SCREEN, handleOpenShowPaymentScreen);
  yield takeEvery(OPEN_ADD_PAYMENT_SCREEN, handleOpenAddPaymentScreen);
}

export function* handleOpenAddPaymentScreen(): Saga<void> {
  yield put(clearPaymentData());
  NavigatorActions.navigate(PAYMENT);
}

export function* handleOpenShowPaymentScreen(action: OpenShowPaymentScreenAction): Saga<void> {
  const imageUrl = yield call(getPaymentImageUrl, action.payload.pathToImage);
  const paymentData = {
    ...action.payload,
    pathToImage: imageUrl
  };

  yield put(changePaymentData(paymentData));
  NavigatorActions.navigate(PAYMENT);
}

const mapPaymentListResponseToPaymentListItems = paymentListObject =>
  Object.entries(paymentListObject).map(value => ({ key: value[0], ...value[1] }));

export function* handleLoadPaymentList(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const paymentListReponse = yield call(getPaymentList, uid);
    const mappedPaymentList = mapPaymentListResponseToPaymentListItems(paymentListReponse);
    yield put(loadPaymentListSuccess(mappedPaymentList));
  } catch (error) {
    yield put(loadPaymentListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

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
  // FIXME: use constants for params.
  NavigatorActions.navigate(PAYMENT, { intent: 'ADD' });
}

export function* handleOpenShowPaymentScreen({ payload }: OpenShowPaymentScreenAction): Saga<void> {
  const storageImagePath = `${payload.key}/${payload.image.name}`;
  const imageUrl = yield call(getPaymentImageUrl, storageImagePath);
  const paymentData = {
    ...payload,
    image: {
      ...payload.image,
      url: imageUrl
    }
  };

  yield put(changePaymentData(paymentData));
  // FIXME: use constants for params.
  NavigatorActions.navigate(PAYMENT, { intent: 'EDIT' });
}

export function* handleLoadPaymentList(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const paymentListReponse = yield call(getPaymentList, uid);
    yield put(loadPaymentListSuccess(paymentListReponse));
  } catch (error) {
    yield put(loadPaymentListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

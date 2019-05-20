// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { I18n, NavigatorActions, Toast } from '@my/framework';
import { selectUid } from '../../Authentication';
import { getPaymentList, getPaymentImageUrl } from '../Student.api';
import { changePaymentData, clearPaymentData } from '../Payment';
import {
  LOAD_PAYMENT_LIST_REQUEST,
  OPEN_ADD_PAYMENT_SCREEN,
  OPEN_SHOW_PAYMENT_SCREEN,
  loadPaymentListFailure,
  loadPaymentListSuccess,
  type OpenShowPaymentScreen
} from './PaymentList.actions';
import { PAYMENT_ROUTE } from '../Student.constants';

export default function* paymentListSaga(): Saga<void> {
  yield takeEvery(LOAD_PAYMENT_LIST_REQUEST, handleLoadPaymentList);
  yield takeEvery(OPEN_SHOW_PAYMENT_SCREEN, handleOpenShowPaymentScreen);
  yield takeEvery(OPEN_ADD_PAYMENT_SCREEN, handleOpenAddPaymentScreen);
}

export function* handleOpenAddPaymentScreen(): Saga<void> {
  yield put(clearPaymentData());
  // FIXME: use constants for params.
  NavigatorActions.navigate(PAYMENT_ROUTE, { intent: 'ADD' });
}

export function* handleOpenShowPaymentScreen({ payload }: OpenShowPaymentScreen): Saga<void> {
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
  NavigatorActions.navigate(PAYMENT_ROUTE, { intent: 'EDIT' });
}

export function* handleLoadPaymentList(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const paymentListReponse = yield call(getPaymentList, uid);
    if (paymentListReponse) {
      yield put(loadPaymentListSuccess(Object.values(paymentListReponse)));
    } else {
      yield put(loadPaymentListSuccess([]));
    }
  } catch (error) {
    yield put(loadPaymentListFailure());
    Toast.show(I18n.translate('student.errors.dataLoading'));
  }
}

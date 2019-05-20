// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getPaymentList, getPaymentImageUrl } from '../Dean.api';
import { changePaymentData, clearPaymentData } from '../Payment';
import {
  LOAD_PAYMENT_LIST_REQUEST,
  OPEN_SHOW_PAYMENT_SCREEN,
  loadPaymentListFailure,
  loadPaymentListSuccess,
  type OpenShowPaymentScreenAction
} from './PaymentList.actions';
import { selectCurrentStudent } from '../StudentList';
import { PAYMENT } from '../Dean.navigator';
import { type PaymentData } from '../../types';

export default function* paymentListSaga(): Saga<void> {
  yield takeEvery(LOAD_PAYMENT_LIST_REQUEST, handleLoadPaymentList);
  yield takeEvery(OPEN_SHOW_PAYMENT_SCREEN, handleOpenShowPaymentScreen);
}

export function* handleOpenAddPaymentScreen(): Saga<void> {
  yield put(clearPaymentData());
  NavigatorActions.navigate(PAYMENT);
}

export function* handleOpenShowPaymentScreen({ payload }: OpenShowPaymentScreenAction): Saga<void> {
  try {
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
    yield call(NavigatorActions.navigate, PAYMENT);
  } catch (error) {
    console.log('=== er', error);
  }
}

export function* handleLoadPaymentList(): Saga<void> {
  const student = yield select(selectCurrentStudent);

  try {
    const paymentListReponse = yield call(getPaymentList, student.uid);
    if (paymentListReponse) {
      const paymentList: PaymentData[] = (Object.values(paymentListReponse): Object[]);
      yield put(loadPaymentListSuccess(paymentList));
    } else {
      yield put(loadPaymentListSuccess([]));
    }
  } catch (error) {
    yield put(loadPaymentListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '../../../Services';
import { selectUid } from '../../Authentication';
import {
  updatePayment,
  removePayment
} from '../Dean.api';
import { loadPaymentListRequest } from '../PaymentList';
import {
  REMOVE_PAYMENT_REQUEST,
  UPLOAD_PAYMENT_REQUEST,
  removePaymentFailure,
  removePaymentSuccess,
  uploadPaymentFailure,
  uploadPaymentSuccess
} from './Payment.actions';
import {
  selectDate,
  selectImage,
  selectKey,
  selectMoneyAmount,
  selectPaymentType
} from './Payment.selectors';

export default function* paymentSaga(): Saga<void> {
  yield takeEvery(REMOVE_PAYMENT_REQUEST, handleRemovePayment);
  yield takeEvery(UPLOAD_PAYMENT_REQUEST, handleUploadPayment);
}

export function* handleRemovePayment(): Saga<void> {
  const image = yield select(selectImage);
  const key = yield select(selectKey);
  const uid = yield select(selectUid);

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

export function* handleUploadPayment(): Saga<void> {
  const date = yield select(selectDate);
  const paymentType = yield select(selectPaymentType);
  const moneyAmount = yield select(selectMoneyAmount);
  const image = yield select(selectImage);
  const uid = yield select(selectUid);
  const currentKey = yield select(selectKey);

  const isDataEmpty = !date || !paymentType || !moneyAmount || !image.name;

  if (isDataEmpty) {
    Toast.show('Введите все данные');
    yield put(uploadPaymentFailure());
  }

  try {
    const key = currentKey;

    const paymentInfo = {
      date,
      image: {
        name: image.name,
        url: ''
      },
      isResolved: false,
      key,
      moneyAmount,
      paymentType
    };
    const storageImagePath = `${key}/${image.name}`;


    yield call(updatePayment, uid, paymentInfo, storageImagePath, image.path);

    NavigatorActions.back();
    yield put(uploadPaymentSuccess());
    yield put(loadPaymentListRequest());
    Toast.show('Платёж добавлен');
  } catch (error) {
    yield put(uploadPaymentFailure());
    Toast.show('Ошибка при добавлении данных');
  }
}

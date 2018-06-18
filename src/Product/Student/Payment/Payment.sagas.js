// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
// $FlowFixMe no default export.
import ImagePicker, { type Response, type Options } from 'react-native-image-picker';
import { NavigatorActions, Toast } from '../../../Services';
import { selectUid } from '../../Authentication';
import {
  addPayment,
  getNewPaymentKey,
  removePayment,
  updatePayment
} from '../Student.api';
import { loadPaymentListRequest } from '../PaymentList';
import {
  OPEN_IMAGE_PICKER,
  REMOVE_PAYMENT_REQUEST,
  UPLOAD_PAYMENT_REQUEST,
  removePaymentFailure,
  removePaymentSuccess,
  uploadPaymentFailure,
  uploadPaymentSuccess,
  changeImage,
  type UploadPaymentRequestAction
} from './Payment.actions';
import {
  selectDate,
  selectImage,
  selectKey,
  selectMoneyAmount,
  selectPaymentType
} from './Payment.selectors';

const imagePickerOptions: Options = {
  cancelButtonTitle: 'Закрыть',
  chooseFromLibraryButtonTitle: 'Выбрать из библиотеки',
  noData: true,
  title: 'Выберите изображение',
  takePhotoButtonTitle: 'Сделать фото'
};

export default function* paymentSaga(): Saga<void> {
  yield takeEvery(OPEN_IMAGE_PICKER, handleSetImage);
  yield takeEvery(REMOVE_PAYMENT_REQUEST, handleRemovePayment);
  yield takeEvery(UPLOAD_PAYMENT_REQUEST, handleUploadPayment);
}

const showImagePicker = (): Promise<Response> => new Promise((resolve) => {
  const handleImagePickerResponse = response => resolve(response);
  ImagePicker.showImagePicker(imagePickerOptions, handleImagePickerResponse);
});

export function* handleSetImage(): Saga<void> {
  const response = yield call(showImagePicker);

  if (response.didCancel) {
    return;
  } else if (response.error) {
    Toast.show('Ошибка медиа');
    return;
  }

  yield put(changeImage({
    name: response.fileName,
    path: response.path,
    url: ''
  }));
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

export function* handleUploadPayment({ payload }: UploadPaymentRequestAction): Saga<void> {
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
    const newKey = yield call(getNewPaymentKey);
    const key = payload === 'EDIT' ? currentKey : newKey;

    const paymentInfo = {
      date,
      image: {
        name: image.name,
        url: ''
      },
      status: 'declined',
      key,
      moneyAmount,
      paymentType
    };
    const storageImagePath = `${key}/${image.name}`;

    if (payload === 'EDIT') {
      yield call(updatePayment, uid, paymentInfo, storageImagePath, image.path);
    } else {
      yield call(addPayment, uid, paymentInfo, storageImagePath, image.path);
    }
    NavigatorActions.back();
    yield put(uploadPaymentSuccess());
    yield put(loadPaymentListRequest());
    Toast.show('Платёж добавлен');
  } catch (error) {
    yield put(uploadPaymentFailure());
    Toast.show('Ошибка при добавлении данных');
  }
}

// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
// $FlowFixMe no default export.
import ImagePicker, { type Response, type Options } from 'react-native-image-picker';
import { NavigatorActions, Toast } from '../../../Services';
import { selectUid } from '../../Authentication';
import { addPayment, getNewPaymentKey } from '../Student.api';
import {
  ADD_PAYMENT_REQUEST,
  OPEN_IMAGE_PICKER,
  addPaymentFailure,
  addPaymentSuccess,
  changeImage
} from './Payment.actions';
import {
  selectDate,
  selectImage,
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
  yield takeEvery(ADD_PAYMENT_REQUEST, handleAddPaymentRequest);
  yield takeEvery(OPEN_IMAGE_PICKER, handleSetImage);
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

export function* handleAddPaymentRequest(): Saga<void> {
  const date = yield select(selectDate);
  const paymentType = yield select(selectPaymentType);
  const moneyAmount = yield select(selectMoneyAmount);
  const image = yield select(selectImage);
  const uid = yield select(selectUid);

  if (!date || !paymentType || !moneyAmount || !image.name) {
    Toast.show('Введите все данные');
    yield put(addPaymentFailure());
    return;
  }

  try {
    const key = yield call(getNewPaymentKey);

    const paymentInfo = {
      date,
      isResolved: false,
      moneyAmount,
      pathToImage: `${key}/${image.name}`,
      paymentType
    };

    yield call(addPayment, paymentInfo, image.path, uid, key);
    yield put(addPaymentSuccess());
    NavigatorActions.back();
    Toast.show('Чек добавлен');
  } catch (error) {
    yield put(addPaymentFailure());
    Toast.show('Ошибка при добавлении данных');
  }
}

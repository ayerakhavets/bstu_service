// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
// $FlowFixMe no default export.
import ImagePicker, { type Response, type Options } from 'react-native-image-picker';
import { NavigatorActions, Toast } from '../../../Services';
import { selectUid } from '../../Authentication';
import { addPayment, getNewPaymentKey, updatePayment } from '../Student.api';
import {
  UPLOAD_PAYMENT_REQUEST,
  OPEN_IMAGE_PICKER,
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
  yield takeEvery(UPLOAD_PAYMENT_REQUEST, handleUploadPaymentRequest);
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

export function* handleUploadPaymentRequest({ payload }: UploadPaymentRequestAction): Saga<void> {
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
      isResolved: false,
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
    Toast.show('Чек добавлен');
  } catch (error) {
    yield put(uploadPaymentFailure());
    Toast.show('Ошибка при добавлении данных');
  }
}

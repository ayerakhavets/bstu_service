// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
// $FlowFixMe no default export.
import ImagePicker, { type Response, type Options } from 'react-native-image-picker';
import {
  ADD_CHECK,
  LOAD_CHECKS,
  OPEN_IMAGE_PICKER,
  changeImage
} from './CheckList.actions';
import { addCheck, getCheckList } from '../Student.api';
import { selectUid } from '../../Authentication';
import {
  selectDate,
  selectImage,
  selectMoneyAmount,
  selectPaymentType
} from './CheckList.selectors';

const imagePickerOptions: Options = {
  title: 'Выберите изображение',
  cancelButtonTitle: 'Закрыть',
  takePhotoButtonTitle: 'Сделать фото',
  chooseFromLibraryButtonTitle: 'Выбрать из библиотеки'
};

const showImagePicker = (): Promise<Response> => new Promise((resolve) => {
  const handleImagePickerResponse = response => resolve(response);
  ImagePicker.showImagePicker(imagePickerOptions, handleImagePickerResponse);
});

export default function* checkListSaga(): Saga<void> {
  yield takeEvery(ADD_CHECK, handleAddCheck);
  yield takeEvery(LOAD_CHECKS, handleLoadChecks);
  yield takeEvery(OPEN_IMAGE_PICKER, handleSetImage);
}

export function* handleSetImage(): Saga<void> {
  const response = yield call(showImagePicker);
  console.log('showImagePicker response: ', response);
  yield put(changeImage({
    name: response.fileName,
    localPath: response.path
  }));
}

export function* handleAddCheck(): Saga<void> {
  const date = yield select(selectDate);
  const paymentType = yield select(selectPaymentType);
  const moneyAmount = yield select(selectMoneyAmount);
  const image = yield select(selectImage);

  const uid = yield select(selectUid);
  console.log('=== check name', image);
  const paymentInfo = {
    date,
    paymentType,
    moneyAmount,
    image: image.name
  };

  try {
    yield call(addCheck, image, paymentInfo, uid);
    console.log('=== handleAddCheck success');
  } catch (error) {
    // TODO: handle error.
    console.log('error handleAddCheck', error);
  }
}

export function* handleLoadChecks(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const res = yield call(getCheckList, uid);
    console.log('=== success handleLoadChecks', res);
    // eslint-disable-next-line no-underscore-dangle
    mapCheckListItemsToArray(res._value);
  } catch (error) {
    // TODO: handle error.
    console.log(error);
  }
}

const mapCheckListItemsToArray = checkListObject =>
  Object.entries(checkListObject).map(value => ({ key: value[0], ...value[1] }));

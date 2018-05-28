// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
// eslint-disable-next-line react-native/split-platform-components
import { AsyncStorage, ToastAndroid } from 'react-native';
import NavigatorService from '../../Services/navigator';
import { changeUserInfo } from '../Student';
import {
  createUserWithEmailAndPassword,
  getUserInfo,
  signInWithEmailAndPassword
} from './Authentication.api';
import {
  LOG_IN,
  PRE_AUTHENTICATION,
  SIGN_UP,
  changeUid,
  changeEmail,
  changePassword,
  loadingEnd,
  loadingStart
} from './Authentication.actions';
import {
  selectEmail,
  selectIsRemember,
  selectPassword,
  selectUid
} from './Authentication.selectors';

const EMAIL_KEY = 'EMAIL_KEY';
const PASSWORD_KEY = 'PASSWORD_KEY';
const UID_KEY = 'UID_KEY';

export default function* authenticationSaga(): Saga<void> {
  yield takeEvery(LOG_IN, handleLogIn);
  yield takeEvery(PRE_AUTHENTICATION, handlePreAuthentication);
  yield takeEvery(SIGN_UP, handleSignUp);
}

export function* handleLogIn(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const isRemember = yield select(selectIsRemember);

  const requestParams = [email, password];

  // FIXME: implement showing info for iOS.
  if (!email || !password) {
    ToastAndroid.show('Введите данные', ToastAndroid.SHORT);
    return;
  }

  try {
    yield put(loadingStart());
    const { user } = yield call(signInWithEmailAndPassword, ...requestParams);
    yield put(changeUid(user.uid));

    const userInfo = yield call(getUserInfo, user.uid);
    yield put(changeUserInfo(userInfo));

    if (isRemember) yield call(saveCredentials);
    yield put(loadingEnd());

    // TODO: handle admin/student roles.
    NavigatorService.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    // FIXME: implement showing info for iOS.
    ToastAndroid.show('Ошибка', ToastAndroid.SHORT);
  }
}

export function* handlePreAuthentication(): Saga<void> {
  yield put(loadingStart());

  try {
    const email = yield call(AsyncStorage.getItem, EMAIL_KEY);
    const password = yield call(AsyncStorage.getItem, PASSWORD_KEY);
    const uid = yield call(AsyncStorage.getItem, UID_KEY);

    if (!email || !password || !uid) {
      yield put(loadingEnd());
      return;
    }

    yield put(changeEmail(email));
    yield put(changePassword(password));
    yield put(changeUid(uid));

    const userInfo = yield call(getUserInfo, uid);
    yield put(changeUserInfo(userInfo));

    yield put(loadingEnd());

    // TODO: handle admin/student roles.
    NavigatorService.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    // FIXME: implement showing info for iOS.
    ToastAndroid.show('Что-то пошло не так', ToastAndroid.SHORT);
  }
}

export function* handleSignUp(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const isRemember = yield select(selectIsRemember);

  const requestParams = [email, password];

  // FIXME: implement showing info for iOS.
  if (!email || !password) {
    ToastAndroid.show('Введите данные', ToastAndroid.SHORT);
    return;
  }

  try {
    yield put(loadingStart());

    const { user } = yield call(createUserWithEmailAndPassword, ...requestParams);
    yield put(changeUid(user.uid));

    if (isRemember) yield call(saveCredentials);
    yield put(loadingEnd());

    NavigatorService.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    // FIXME: implement showing info for iOS.
    ToastAndroid.show('Ошибка', ToastAndroid.SHORT);
  }
}

export function* saveCredentials(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const uid = yield select(selectUid);

  yield call(AsyncStorage.multiSet, [
    [EMAIL_KEY, email],
    [PASSWORD_KEY, password],
    [UID_KEY, uid]
  ]);
}

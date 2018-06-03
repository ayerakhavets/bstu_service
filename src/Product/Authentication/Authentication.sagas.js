// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { NavigatorActions, Toast } from '../../Services';
import { changeUserInfo, clearStudentInfo } from '../Student';
import {
  createUserWithEmailAndPassword,
  getUserInfo,
  sendEmailVerification,
  signInWithEmailAndPassword
} from './Authentication.api';
import {
  LOG_IN,
  LOG_OUT,
  PRE_AUTHENTICATION,
  SIGN_UP,
  changeUid,
  changeEmail,
  changePassword,
  clearUserData,
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
const ERROR_SHORT_PASSWORD =
  'The given password is invalid. [ Password should be at least 6 characters ]';

export default function* authenticationSaga(): Saga<void> {
  yield takeEvery(LOG_IN, handleLogIn);
  yield takeEvery(LOG_OUT, handleLogOut);
  yield takeEvery(PRE_AUTHENTICATION, handlePreAuthentication);
  yield takeEvery(SIGN_UP, handleSignUp);
}

export function* handleLogIn(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const isRemember = yield select(selectIsRemember);

  const requestParams = [email, password];

  if (!email || !password) {
    Toast.show('Введите данные');
    return;
  }

  try {
    yield put(loadingStart());
    const { user } = yield call(signInWithEmailAndPassword, ...requestParams);
    yield put(changeUid(user.uid));

    // FIXME: move api call and result handling to the StudentInfo component.
    const userInfo = yield call(getUserInfo, user.uid);
    yield put(changeUserInfo(userInfo));

    if (isRemember) yield call(saveCredentials);
    yield put(loadingEnd());

    // TODO: handle admin/student roles.
    NavigatorActions.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    Toast.show('Ошибка');
  }
}

export function* handleLogOut(): Saga<void> {
  yield put(clearUserData());
  yield call(AsyncStorage.multiRemove, [
    EMAIL_KEY,
    PASSWORD_KEY,
    UID_KEY
  ]);

  // FIXME: send `signOut` request.
  NavigatorActions.navigate('Auth');
  yield put(clearStudentInfo());
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

    // FIXME: move api call and result handling to the StudentInfo component.
    const userInfo = yield call(getUserInfo, uid);
    yield put(changeUserInfo(userInfo));

    yield put(loadingEnd());

    // TODO: handle admin/student roles.
    NavigatorActions.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    Toast.show('Ошибка');
  }
}

export function* handleSignUp(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const isRemember = yield select(selectIsRemember);

  const requestParams = [email, password];

  if (!email || !password) {
    Toast.show('Введите данные');
    return;
  }

  try {
    yield put(loadingStart());

    const { user } = yield call(createUserWithEmailAndPassword, ...requestParams);
    yield put(changeUid(user.uid));

    yield call(sendEmailVerification, user);

    if (isRemember) yield call(saveCredentials);
    yield put(loadingEnd());

    NavigatorActions.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    if (error.message === ERROR_SHORT_PASSWORD) {
      Toast.show('Пароль меньше 6 символов');
    } else {
      Toast.show('Ошибка');
    }
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

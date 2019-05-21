// @flow
import { type Saga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigatorActions, Toast } from '@my/framework';
import { changeUserInfo } from '../../Student';
import { getUserData } from '../api';
import {
  changeUid,
  changeEmail,
  changePassword,
  loadingEnd,
  loadingStart
} from '../Authentication.actions';
import {
  EMAIL_KEY,
  PASSWORD_KEY,
  UID_KEY,
  adminUid,
  lecturerUid
} from '../Authentication.constants';
import { DEAN_ROUTE, LECTURER_ROUTE, STUDENT_ROUTE } from '../../Product.constants';


export default function* authentication(): Saga<void> {
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

    if (uid === adminUid) {
      yield put(loadingEnd());
      yield call(NavigatorActions.navigate, DEAN_ROUTE);
      return;
    } else if (uid === lecturerUid) {
      yield put(loadingEnd());
      yield call(NavigatorActions.navigate, LECTURER_ROUTE);
      return;
    }

    // TODO: move api call and result handling to the StudentInfo component.
    const userInfo = yield call(getUserData, uid);
    yield put(changeUserInfo(userInfo));

    yield put(loadingEnd());

    yield call(NavigatorActions.navigate, STUDENT_ROUTE);
  } catch (error) {
    yield put(loadingEnd());
    yield call(Toast.show, 'Ошибка');
  }
}

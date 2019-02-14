// @flow
import { type Saga } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getUserData, signIn } from '../api';

import { changeUserInfo } from '../../Student';
import { changeUid, loadingEnd, loadingStart } from '../Authentication.actions';

import { selectEmail, selectIsRemember, selectPassword } from '../Authentication.selectors';
import { adminUid, lecturerUid } from '../Authentication.constants';
import saveCredentialsSaga from './saveCredentials.saga';


export default function* loginSaga(): Saga<void> {
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
    const { user } = yield call(signIn, ...requestParams);
    yield put(changeUid(user.uid));

    if (isRemember) yield call(saveCredentialsSaga);

    if (user.uid === adminUid) {
      yield put(loadingEnd());
      NavigatorActions.navigate('Dean');
      return;
    } else if (user.uid === lecturerUid) {
      yield put(loadingEnd());
      NavigatorActions.navigate('Lecturer');
      return;
    }

    // FIXME: move api call and result handling to the StudentInfo component.
    const userInfo = yield call(getUserData, user.uid);
    yield put(changeUserInfo(userInfo));
    yield put(loadingEnd());

    NavigatorActions.navigate('Student');
  } catch (error) {
    yield put(loadingEnd());
    Toast.show('Ошибка');
  }
}

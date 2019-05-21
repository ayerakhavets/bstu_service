// @flow
import { type Saga } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { createUser } from '../api';
import { changeUid, loadingEnd, loadingStart } from '../Authentication.actions';
import { selectEmail, selectIsRemember, selectPassword } from '../Authentication.selectors';
import saveCredentialsSaga from './saveCredentials.saga';
import { ERROR_SHORT_PASSWORD } from '../Authentication.constants';


export default function* signUp(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const isRemember = yield select(selectIsRemember);

  const requestParams = [email, password];

  if (!email || !password) {
    yield call(Toast.show, 'Введите данные');
    return;
  }

  try {
    yield put(loadingStart());

    const { user } = yield call(createUser, ...requestParams);
    yield put(changeUid(user.uid));

    yield call(user.sendEmailVerification); // TODO: check if it even works.

    if (isRemember) {
      yield call(saveCredentialsSaga);
    }
    yield put(loadingEnd());

    yield call(NavigatorActions.navigate, 'Student');
  } catch (error) {
    yield put(loadingEnd());
    if (error.message === ERROR_SHORT_PASSWORD) {
      yield call(Toast.show, 'Пароль меньше 6 символов');
    } else {
      yield call(Toast.show, 'Ошибка');
    }
  }
}

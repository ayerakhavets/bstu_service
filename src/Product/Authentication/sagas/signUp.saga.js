// @flow
import { type Saga } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { createUser } from '../api';
import { changeUid, loadingEnd, loadingStart } from '../Authentication.actions';
import { selectEmail, selectIsRemember, selectPassword } from '../Authentication.selectors';
import saveCredentialsSaga from './saveCredentials.saga';


const ERROR_SHORT_PASSWORD = 'The given password is invalid. [ Password should be at least 6 characters ]';

export default function* signUp(): Saga<void> {
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

    const { user } = yield call(createUser, ...requestParams);
    yield put(changeUid(user.uid));

    yield call(user.sendEmailVerification); // TODO: check

    if (isRemember) yield call(saveCredentialsSaga);
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

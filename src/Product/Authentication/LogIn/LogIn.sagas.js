// @flow
import { type Saga } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
// import NavigatorService from '../../../Services/navigator';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Authentication.api';
import { LOG_IN, SIGN_UP } from './LogIn.actions';
import { selectEmail, selectPassword } from './LogIn.selectors';

export default function* logInSaga(): Saga<void> {
  yield takeEvery(LOG_IN, handleLogIn);
  yield takeEvery(SIGN_UP, handleSignUp);
}

export function* handleLogIn(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);

  const requestParams = {
    email,
    password
  };

  try {
    // {'a.yerokhovets@outlook.com', '123456'};
    const response = yield call(signInWithEmailAndPassword, requestParams);
    console.log('=== success', response);
    // NavigatorService.navigate('Student');
  } catch (error) {
    console.log('=== error', error);
  }
}

export function* handleSignUp(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);

  const requestParams = {
    email,
    password
  };

  try {
    const response = yield call(createUserWithEmailAndPassword, requestParams);
    console.log('=== success', response);
    // NavigatorService.navigate('Student');
  } catch (error) {
    console.log('=== error', error);
  }
}

// @flow
import { type Saga } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
// import NavigatorService from '../../../Services/navigator';
import { createUserWithEmailAndPassword } from '../Authentication.api';
import { LOG_IN } from './LogIn.actions';
import { selectEmail, selectPassword } from './LogIn.selectors';

export default function* logInSaga(): Saga<void> {
  yield takeEvery(LOG_IN, handleLogIn);
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
    const response = yield call(createUserWithEmailAndPassword, requestParams);
    console.log('=== success', response);
  } catch (error) {
    console.log('=== error', error);
  }
  // NavigatorService.navigate('Student');
}

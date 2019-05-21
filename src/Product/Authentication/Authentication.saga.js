// @flow
import { type Saga } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import {
  LOG_IN,
  LOG_OUT,
  PRE_AUTHENTICATION,
  SIGN_UP
} from './Authentication.actions';
import {
  authenticationSaga,
  loginSaga,
  logoutSaga,
  signUpSaga
} from './sagas';


// TODO: fix handling of admin/student roles.
export default function* authentication(): Saga<void> {
  yield takeEvery(LOG_IN, loginSaga);
  yield takeEvery(LOG_OUT, logoutSaga);
  yield takeEvery(PRE_AUTHENTICATION, authenticationSaga);
  yield takeEvery(SIGN_UP, signUpSaga);
}

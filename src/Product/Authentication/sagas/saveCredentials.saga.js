// @flow
import { type Saga } from 'redux-saga';
import { call, select } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { selectEmail, selectPassword, selectUid } from '../Authentication.selectors';
import { EMAIL_KEY, PASSWORD_KEY, UID_KEY } from '../Authentication.constants';


export default function* saveCredentials(): Saga<void> {
  const email = yield select(selectEmail);
  const password = yield select(selectPassword);
  const uid = yield select(selectUid);

  yield call(AsyncStorage.multiSet, [
    [EMAIL_KEY, email],
    [PASSWORD_KEY, password],
    [UID_KEY, uid]
  ]);
}

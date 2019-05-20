// @flow
import { type Saga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigatorActions } from '@my/framework';
import { clearStudentInfo } from '../../Student';
import { clearUserData } from '../Authentication.actions';
import { EMAIL_KEY, PASSWORD_KEY, UID_KEY } from '../Authentication.constants';


export default function* logOut(): Saga<void> {
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

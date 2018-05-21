import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

export default function* authenticationSaga() {
  yield takeEvery('LOG_IN', incrementAsync);
}

export function* incrementAsync() {
  console.log('hello from Saga');

  // NavigationActions.navigate({
  //   routeName: 'Student'
  // });
  yield put(NavigationActions.navigate({ routeName: 'Student' }));
  yield put(NavigationActions.back());

  // yield delay(1000);
  console.log('bue from Saga');
}

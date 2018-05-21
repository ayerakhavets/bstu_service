import { delay } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import NavigatorService from '../../Services/navigator';


export default function* authenticationSaga() {
  yield takeEvery('LOG_IN', incrementAsync);
}

export function* incrementAsync() {
  NavigatorService.navigate('Student');
  yield delay(1000);
}

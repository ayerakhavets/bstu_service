// @flow
import { type Saga } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
import { ADD_CHECK, LOAD_CHECKS } from './CheckList.actions';
import { addCheck, getCheckList } from '../Student.api';
import { selectUid } from '../../Authentication';
import {
  selectDate,
  selectPaymentType,
  selectMoneyAmount
} from './CheckList.selectors';

export default function* checkListSaga(): Saga<void> {
  yield takeEvery(ADD_CHECK, handleAddCheck);
  yield takeEvery(LOAD_CHECKS, handleLoadChecks);
}

export function* handleAddCheck(): Saga<void> {
  const date = yield select(selectDate);
  const paymentType = yield select(selectPaymentType);
  const moneyAmount = yield select(selectMoneyAmount);

  const uid = yield select(selectUid);

  const paymentInfo = {
    date,
    paymentType,
    moneyAmount
  };

  try {
    yield call(addCheck, uid, paymentInfo);
    console.log('=== handleAddCheck success');
  } catch (error) {
    // TODO: handle error.
    console.log(error);
  }
}

export function* handleLoadChecks(): Saga<void> {
  const uid = yield select(selectUid);

  try {
    const res = yield call(getCheckList, uid);
    console.log('=== success handleLoadChecks', res);
    mapCheckListItemsToArray(res._value);
  } catch (error) {
    // TODO: handle error.
    console.log(error);
  }
}

const mapCheckListItemsToArray = checkListObject =>
  Object.entries(checkListObject).map(value => ({ key: value[0], ...value[1] }));


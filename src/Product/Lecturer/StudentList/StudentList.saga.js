// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getStudentList } from '../Lecturer.api';
import {
  LOAD_STUDENT_LIST_REQUEST,
  OPEN_ORDER_LIST,
  changeCurrentStudent,
  loadStudentListFailure,
  loadStudentListSuccess,
  type OpenOrderListAction
} from './StudentList.actions';
import { selectSubject } from './StudentList.selectors';
import { ORDER_LIST } from '../Lecturer.navigator';
import { lecturerUid } from '../../Authentication/Authentication.constants';

export default function* studentListSaga(): Saga<void> {
  yield takeEvery(LOAD_STUDENT_LIST_REQUEST, handleLoadStudentList);
  yield takeEvery(OPEN_ORDER_LIST, handleOpenOrderList);
}

export function* handleOpenOrderList({ payload }: OpenOrderListAction): Saga<void> {
  yield put(changeCurrentStudent(payload));

  // yield call(NavigatorActions.navigate, ORDER_LIST);
  NavigatorActions.navigate(ORDER_LIST);
}

export function* handleLoadStudentList(): Saga<void> {
  const subject = yield select(selectSubject);

  try {
    const studentListReponse = yield call(getStudentList, lecturerUid, subject);

    if (studentListReponse) {
      yield put(loadStudentListSuccess(Object.values(studentListReponse)));
    } else {
      yield put(loadStudentListSuccess([]));
    }
  } catch (error) {
    yield put(loadStudentListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

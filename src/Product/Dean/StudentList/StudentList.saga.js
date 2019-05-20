// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { NavigatorActions, Toast } from '@my/framework';
import { getStudentList } from '../Dean.api';
import {
  LOAD_STUDENT_LIST_REQUEST,
  OPEN_PAYMENT_LIST,
  changeCurrentStudent,
  loadStudentListFailure,
  loadStudentListSuccess,
  type OpenPaymentListAction
} from './StudentList.actions';
import { selectCourse, selectSpecialty } from '../CourseList';
import { STUDENT_LISTS_TABS } from '../Dean.navigator';
import type { StudentInfo } from '../../types';

export default function* studentListSaga(): Saga<void> {
  yield takeEvery(LOAD_STUDENT_LIST_REQUEST, handleLoadStudentList);
  yield takeEvery(OPEN_PAYMENT_LIST, handleOpenPaymentList);
}

export function* handleOpenPaymentList({ payload }: OpenPaymentListAction): Saga<void> {
  yield put(changeCurrentStudent(payload));
  yield call(NavigatorActions.navigate, STUDENT_LISTS_TABS);
}

const mapper = {
  Mobile: 'ПОиБМС'
};
export function* handleLoadStudentList(): Saga<void> {
  const course = yield select(selectCourse);
  const specialty = yield select(selectSpecialty);

  try {
    const studentListReponse = yield call(getStudentList, mapper[specialty], course);
    if (studentListReponse) {
      const studentList: StudentInfo[] = (Object.values(studentListReponse): Object[]);
      yield put(loadStudentListSuccess(studentList));
    } else {
      yield put(loadStudentListSuccess([]));
    }
  } catch (error) {
    yield put(loadStudentListFailure());
    Toast.show('Ошибка загрузки данных');
  }
}

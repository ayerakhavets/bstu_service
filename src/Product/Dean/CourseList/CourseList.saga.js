// @flow
import { type Saga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { NavigatorActions } from '@my/framework';
import {
  OPEN_STUDENT_LIST,
  changeCourse,
  changeSpecialty,
  type OpenStudentListAction
} from './CourseList.actions';
import { STUDENT_LIST } from '../Dean.navigator';

export default function* courseListSaga(): Saga<void> {
  yield takeEvery(OPEN_STUDENT_LIST, handleOpenStudentList);
}

export function* handleOpenStudentList({ payload }: OpenStudentListAction): Saga<void> {
  yield put(changeCourse(payload.course));
  yield put(changeSpecialty(payload.specialty));
  // FIXME: wrap it into `put`.
  // FIXME: remove params.
  NavigatorActions.navigate(STUDENT_LIST, {
    course: payload.course,
    specialty: payload.specialty
  });
}

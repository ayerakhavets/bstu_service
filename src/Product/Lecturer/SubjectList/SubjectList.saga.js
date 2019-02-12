// @flow
import { type Saga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { NavigatorActions } from '@my/framework';
import { STUDENT_LIST } from '../Lecturer.navigator';
import {
  OPEN_STUDENT_LIST,
  changeSubject,
  type OpenStudentListAction
} from './SubjectList.actions';

export default function* subjectListSaga(): Saga<void> {
  yield takeEvery(OPEN_STUDENT_LIST, handleOpenStudentList);
}

export function* handleOpenStudentList({ payload }: OpenStudentListAction): Saga<void> {
  yield put(changeSubject(payload.subject));
  NavigatorActions.navigate(STUDENT_LIST);
}

// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { I18n, Toast } from '@my/framework';
// FIXME: use this reducer part to select email and uid.
// FIXME: set this values after registration.
import { selectEmail, selectUid } from '../../Authentication';
import { updateStudentInfo } from '../Student.api';
import {
  SAVE_STUDENT_INFO_REQUEST,
  saveStudentInfoFailure,
  saveStudentInfoSuccess
} from './StudentInfo.actions';
import {
  selectCourse,
  selectFaculty,
  selectMiddleName,
  selectName,
  selectSpecialty,
  selectStudentId,
  selectSurname
} from './StudentInfo.selectors';

export default function* studentInfoSaga(): Saga<void> {
  yield takeEvery(SAVE_STUDENT_INFO_REQUEST, saveStudentInfoSaga);
}

export function* saveStudentInfoSaga(): Saga<void> {
  const course: string = yield select(selectCourse);
  const email: string = yield select(selectEmail);
  const faculty: string = yield select(selectFaculty);
  const middleName: string = yield select(selectMiddleName);
  const name: string = yield select(selectName);
  const specialty: string = yield select(selectSpecialty);
  const studentId: string = yield select(selectStudentId);
  const surname: string = yield select(selectSurname);
  const uid: string = yield select(selectUid);

  const studentInfo = {
    course,
    email,
    faculty,
    middleName,
    name,
    specialty,
    studentId,
    surname,
    uid
  };

  try {
    yield call(updateStudentInfo, studentInfo);
    yield put(saveStudentInfoSuccess());
    Toast.show(I18n.translate('student.dataUpdateToast'));
  } catch (error) {
    yield put(saveStudentInfoFailure());
    Toast.show(I18n.translate('student.errors.dataAdding'));
  }
}

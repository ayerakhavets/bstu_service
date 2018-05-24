// @flow
import { type Saga } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
import { updateStudentInfo } from '../Student.api';
import { SAVE_STUDENT_INFO } from './StudentInfo.actions';
import {
  selectCourse,
  selectFaculty,
  selectMiddleName,
  selectName,
  selectSpecialty,
  selectStudentId,
  selectSurname
} from './StudentInfo.selectors';
import { selectEmail, selectUid } from '../../Authentication';

export default function* studentInfoSaga(): Saga<void> {
  yield takeEvery(SAVE_STUDENT_INFO, handleSaveStudentInfo);
}

export function* handleSaveStudentInfo(): Saga<void> {
  const course = yield select(selectCourse);
  const faculty = yield select(selectFaculty);
  const middleName = yield select(selectMiddleName);
  const name = yield select(selectName);
  const specialty = yield select(selectSpecialty);
  const studentId = yield select(selectStudentId);
  const surname = yield select(selectSurname);

  const email = yield select(selectEmail);
  const uid = yield select(selectUid);

  const studentInfo = {
    course,
    faculty,
    middleName,
    name,
    specialty,
    studentId,
    surname,
    email
  };

  try {
    const updates = {};
    updates[`/students/${uid}`] = studentInfo;
    updates[`/specialties/${specialty}/${uid}`] = studentInfo;

    yield call(updateStudentInfo, updates);
    console.log('=== success2');
  } catch (error) {
    // TODO: handle error.
    console.log(error);
  }
}

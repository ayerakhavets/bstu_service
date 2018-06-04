// @flow
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { Toast } from '../../../Services';
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
  yield takeEvery(SAVE_STUDENT_INFO_REQUEST, saveStudentInfo);
}

export function* saveStudentInfo(): Saga<void> {
  const course = yield select(selectCourse);
  const email = yield select(selectEmail);
  const faculty = yield select(selectFaculty);
  const middleName = yield select(selectMiddleName);
  const name = yield select(selectName);
  const specialty = yield select(selectSpecialty);
  const studentId = yield select(selectStudentId);
  const surname = yield select(selectSurname);
  const uid = yield select(selectUid);

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
    Toast.show('Данные обновлены');
  } catch (error) {
    yield put(saveStudentInfoFailure());
    Toast.show('Ошибка добавления данных');
  }
}

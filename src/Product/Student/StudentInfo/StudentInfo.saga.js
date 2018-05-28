// @flow
// eslint-disable-next-line react-native/split-platform-components
import { ToastAndroid } from 'react-native';
import { type Saga } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { selectEmail, selectUid } from '../../Authentication';
import { updateStudentInfo } from '../Student.api';
import {
  SAVE_STUDENT_INFO,
  loadingEnd,
  loadingStart
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
  yield takeEvery(SAVE_STUDENT_INFO, handleSaveStudentInfo);
}

export function* handleSaveStudentInfo(): Saga<void> {
  yield put(loadingStart());

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
    yield put(loadingEnd());
  } catch (error) {
    yield put(loadingEnd());
    // FIXME: implement showing info for iOS.
    ToastAndroid.show('Ошибка', ToastAndroid.SHORT);
  }
}

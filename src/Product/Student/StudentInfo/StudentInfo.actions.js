// @flow
import { createAction, type ActionType } from 'redux-actions';
import { type StudentInfo } from '../../types';
import { STUDENT } from '../Student.constants';


export const CHANGE_COURSE = `CHANGE_COURSE@${STUDENT}`;
export const changeCourse = createAction(CHANGE_COURSE, (course: string) => course);
export type ChangeCourse = ActionType<typeof changeCourse>;

export const CHANGE_FACULTY = `CHANGE_FACULTY@${STUDENT}`;
export const changeFaculty = createAction(CHANGE_FACULTY, (faculty: string) => faculty);
export type ChangeFaculty = ActionType<typeof changeFaculty>;

export const CHANGE_MIDDLE_NAME = `CHANGE_MIDDLE_NAME@${STUDENT}`;
export const changeMiddleName = createAction(CHANGE_MIDDLE_NAME, (middleName: string) => middleName);
export type ChangeMiddleName = ActionType<typeof changeMiddleName>;

export const CHANGE_NAME = `CHANGE_NAME@${STUDENT}`;
export const changeName = createAction(CHANGE_NAME, (name: string) => name);
export type ChangeName = ActionType<typeof changeName>;

export const CHANGE_SPECIALTY = `CHANGE_SPECIALTY@${STUDENT}`;
export const changeSpecialty = createAction(CHANGE_SPECIALTY, (specialty: string) => specialty);
export type СhangeSpecialty = ActionType<typeof changeSpecialty>;

export const CHANGE_STUDENT_ID = `CHANGE_STUDENT_ID@${STUDENT}`;
export const changeStudentId = createAction(CHANGE_STUDENT_ID, (studentId: string) => studentId);
export type ChangeStudentId = ActionType<typeof changeStudentId>

export const CHANGE_SURNAME = `CHANGE_SURNAME@${STUDENT}`;
export const changeSurname = createAction(CHANGE_SURNAME, (surname: string) => surname);
export type ChangeSurname = ActionType<typeof changeSurname>;

export const CHANGE_USER_INFO = `CHANGE_USER_INFO@${STUDENT}`;
export const changeUserInfo = createAction(CHANGE_USER_INFO, (userInfo: StudentInfo) => userInfo);
export type ChangeUserInfo = ActionType<typeof changeUserInfo>;

export const CLEAR_STUDENT_INFO = `CLEAR_STUDENT_INFO@${STUDENT}`;
export const clearStudentInfo = createAction(CLEAR_STUDENT_INFO, () => undefined);

export const SAVE_STUDENT_INFO_FAILURE = `SAVE_STUDENT_INFO_FAILURE@${STUDENT}`;
export const saveStudentInfoFailure = createAction(SAVE_STUDENT_INFO_FAILURE, () => undefined);

export const SAVE_STUDENT_INFO_REQUEST = `SAVE_STUDENT_INFO_REQUEST@${STUDENT}`;
export const saveStudentInfoRequest = createAction(SAVE_STUDENT_INFO_REQUEST, () => undefined);

export const SAVE_STUDENT_INFO_SUCCESS = `SAVE_STUDENT_INFO_SUCCESS@${STUDENT}`;
export const saveStudentInfoSuccess = createAction(SAVE_STUDENT_INFO_SUCCESS, () => undefined);

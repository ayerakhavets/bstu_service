// @flow
import type { ApplicationState, StudentInfo } from '../../types';

export const selectCurrentStudent = ({ lecturer }: ApplicationState): StudentInfo =>
  lecturer.studentList.currentStudent;

export const selectIsLoading = ({ lecturer }: ApplicationState): boolean =>
  lecturer.studentList.isLoading;

export const selectStudentList = ({ lecturer }: ApplicationState): StudentInfo[] =>
  lecturer.studentList.studentList;

export const selectSubject = ({ lecturer }: ApplicationState): string =>
  lecturer.subjectList.subject;


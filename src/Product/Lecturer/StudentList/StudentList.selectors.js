// @flow
import type { ApplicationState, StudentInfo } from '../../types';

export const selectCurrentStudent = ({ lecturer }: ApplicationState): boolean =>
  lecturer.studentList.currentStudent;

export const selectStudentList = ({ lecturer }: ApplicationState): StudentInfo[] =>
  lecturer.studentList.studentList;

export const selectIsLoading = ({ lecturer }: ApplicationState): boolean =>
  lecturer.studentList.isLoading;

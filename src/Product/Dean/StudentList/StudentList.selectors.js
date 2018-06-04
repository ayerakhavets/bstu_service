// @flow
import type { ApplicationState, StudentInfo } from '../../types';

export const selectCurrentStudent = ({ dean }: ApplicationState): boolean =>
  dean.studentList.currentStudent;

export const selectStudentList = ({ dean }: ApplicationState): StudentInfo[] =>
  dean.studentList.studentList;

export const selectIsLoading = ({ dean }: ApplicationState): boolean =>
  dean.studentList.isLoading;

// @flow
import type { ApplicationState as S } from '../../types';

export const selectCourse = ({ student }: S): string => student.studentInfo.course;

export const selectFaculty = ({ student }: S): string => student.studentInfo.faculty;

export const selectIsLoading = ({ student }: S): boolean => student.studentInfo.isLoading;

export const selectMiddleName = ({ student }: S): string => student.studentInfo.middleName;

export const selectName = ({ student }: S): string => student.studentInfo.name;

export const selectSpecialty = ({ student }: S): string => student.studentInfo.specialty;

export const selectStudentId = ({ student }: S): string => student.studentInfo.studentId;

export const selectSurname = ({ student }: S): string => student.studentInfo.surname;

export const selectUid = ({ student }: S): string => student.studentInfo.uid;

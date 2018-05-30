// @flow
import { createSelector } from 'reselect';
import { helpers, type PickerItem } from '../../../Components';
import type { ApplicationState } from '../../types';

export const selectCourse = ({ student }: ApplicationState): string =>
  student.studentInfo.course;

export const selectCourses = ({ student }: ApplicationState): string[] =>
  student.studentInfo.courses;

export const selectFaculty = ({ student }: ApplicationState): string =>
  student.studentInfo.faculty;

export const selectFaculties = ({ student }: ApplicationState): string[] =>
  student.studentInfo.faculties;

export const selectIsLoading = ({ student }: ApplicationState): boolean =>
  student.studentInfo.isLoading;

export const selectMiddleName = ({ student }: ApplicationState): string =>
  student.studentInfo.middleName;

export const selectName = ({ student }: ApplicationState): string =>
  student.studentInfo.name;

export const selectSpecialty = ({ student }: ApplicationState): string =>
  student.studentInfo.specialty;

export const selectSpecialties = ({ student }: ApplicationState): string[] =>
  student.studentInfo.specialties;

export const selectStudentId = ({ student }: ApplicationState): string =>
  student.studentInfo.studentId;

export const selectSurname = ({ student }: ApplicationState): string =>
  student.studentInfo.surname;

export const selectMappedCourses = createSelector(
  selectCourses,
  (courses): PickerItem[] => courses.map(helpers.mapItemToPickerItem)
);

export const selectMappedFaculties = createSelector(
  selectFaculties,
  (faculties): PickerItem[] => faculties.map(helpers.mapItemToPickerItem)
);

export const selectMappedSpecialties = createSelector(
  selectSpecialties,
  (specialties): PickerItem[] => specialties.map(helpers.mapItemToPickerItem)
);

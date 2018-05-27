// @flow
import { createSelector } from 'reselect';
import type { ApplicationState } from '../../Product.reducer';
import type { PickerItem } from '../../../Components';

export const selectCourse = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.course;

export const selectCourses = ({ studentReducer }: ApplicationState): string[] =>
  studentReducer.studentInfoReducer.courses;

export const selectFaculty = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.faculty;

export const selectFaculties = ({ studentReducer }: ApplicationState): string[] =>
  studentReducer.studentInfoReducer.faculties;

export const selectMiddleName = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.middleName;

export const selectName = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.name;

export const selectSpecialty = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.specialty;

export const selectSpecialties = ({ studentReducer }: ApplicationState): string[] =>
  studentReducer.studentInfoReducer.specialties;

export const selectStudentId = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.studentId;

export const selectSurname = ({ studentReducer }: ApplicationState): string =>
  studentReducer.studentInfoReducer.surname;

export const selectMappedCourses = createSelector(
  selectCourses,
  courses => courses.map((course): PickerItem => ({ label: course, value: course }))
);

export const selectMappedFaculties = createSelector(
  selectFaculties,
  faculties => faculties.map((faculty): PickerItem => ({ label: faculty, value: faculty }))
);

export const selectMappedSpecialties = createSelector(
  selectSpecialties,
  specialties =>
    specialties.map((specialty): PickerItem => ({ label: specialty, value: specialty }))
);

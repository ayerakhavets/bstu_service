// @flow
import type { ApplicationState } from '../../types';

export const selectCourse = ({ dean }: ApplicationState): string =>
  dean.courseList.course;

export const selectSpecialty = ({ dean }: ApplicationState): string =>
  dean.courseList.specialty;

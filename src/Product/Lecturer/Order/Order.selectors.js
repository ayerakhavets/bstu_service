// @flow
import type { ApplicationState } from '../../types';

export const selectDate = ({ lecturer }: ApplicationState): string =>
  lecturer.order.date;

export const selectStartDate = ({ lecturer }: ApplicationState): string =>
  lecturer.order.startDate;

export const selectEndDate = ({ lecturer }: ApplicationState): string =>
  lecturer.order.endDate;

export const selectLecturer = ({ lecturer }: ApplicationState): string =>
  lecturer.order.lecturer;

export const selectStatus = ({ lecturer }: ApplicationState): string =>
  lecturer.order.status;

export const selectMark = ({ lecturer }: ApplicationState): string =>
  lecturer.order.mark;

export const selectSubject = ({ lecturer }: ApplicationState): string =>
  lecturer.order.subject;

export const selectKey = ({ lecturer }: ApplicationState): string =>
  lecturer.order.key;

export const selectIsLoading = ({ lecturer }: ApplicationState): boolean =>
  lecturer.order.isLoading;

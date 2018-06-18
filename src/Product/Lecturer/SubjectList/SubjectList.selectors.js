// @flow
import type { ApplicationState } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const selectSubject = ({ lecturer }: ApplicationState): string =>
  lecturer.subjectList.subject;

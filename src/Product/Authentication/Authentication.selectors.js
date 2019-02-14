// @flow
import type { ApplicationState } from '../types';


export const selectEmail = ({ authentication }: ApplicationState): string => authentication.email;

export const selectIsLoading = ({ authentication }: ApplicationState): boolean =>
  authentication.isLoading;

export const selectIsRemember = ({ authentication }: ApplicationState): boolean =>
  authentication.isRemember;

export const selectPassword = ({ authentication }: ApplicationState): string =>
  authentication.password;

export const selectUid = ({ authentication }: ApplicationState): string => authentication.uid;

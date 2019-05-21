// @flow
import type { ApplicationState as S } from '../types';

export const selectEmail = ({ authentication }: S): string => authentication.email;

export const selectIsLoading = ({ authentication }: S): boolean => authentication.isLoading;

export const selectIsRemember = ({ authentication }: S): boolean => authentication.isRemember;

export const selectPassword = ({ authentication }: S): string => authentication.password;

export const selectUid = ({ authentication }: S): string => authentication.uid;

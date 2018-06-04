// @flow
import firebase, { type UserCredential, type User } from 'react-native-firebase';
import type { StudentInfo } from '../types';

export const createUserWithEmailAndPassword = (email: string,
  password: string): Promise<UserCredential> =>
  firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email: string,
  password: string): Promise<UserCredential> =>
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);

export const sendEmailVerification = (user: User): Promise<void> =>
  user.sendEmailVerification();

// FIXME: move to StudentInfo component.
export const getUserInfo = (uid: string): StudentInfo =>
  // $FlowFixMe `once()` requires another argument.
  firebase.database().ref(`/students/${uid}`).once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

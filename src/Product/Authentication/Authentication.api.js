// @flow
import firebase, { type UserCredential } from 'react-native-firebase';
import type { UserInfo } from '../types';

export const createUserWithEmailAndPassword =
    (email: string, password: string): Promise<UserCredential> =>
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword =
    (email: string, password: string): Promise<UserCredential> =>
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);

export const getUserInfo =
    // $FlowFixMe function once() requires another argument.
    (uid: string): UserInfo => firebase.database().ref(`/students/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
      .then(response => response._value);

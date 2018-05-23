// @flow
import firebase from 'react-native-firebase';

export type UserCredentials = {
    user: Object
  }

export const createUserWithEmailAndPassword =
    (email: string, password: string): Promise<UserCredentials> =>
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword =
    (email: string, password: string): Promise<UserCredentials> =>
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);


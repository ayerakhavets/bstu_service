// @flow
import firebase, { type UserCredential } from 'react-native-firebase';

export const createUserWithEmailAndPassword =
    (email: string, password: string): Promise<UserCredential> =>
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword =
    (email: string, password: string): Promise<UserCredential> =>
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);

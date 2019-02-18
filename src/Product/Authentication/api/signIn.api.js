// @flow
import firebase, { type UserCredential } from 'react-native-firebase';

const signIn = (email: string, password: string): Promise<UserCredential> =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export default signIn;

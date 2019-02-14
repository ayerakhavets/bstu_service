// @flow
import firebase, { type UserCredential } from 'react-native-firebase';

const createUser = (email: string, password: string): Promise<UserCredential> =>
  firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);

export default createUser;

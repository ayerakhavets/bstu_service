// @flow
import firebase from 'react-native-firebase';

export type CreateUserResponse = {
    user: Object
  }

// eslint-disable-next-line import/prefer-default-export
export const createUserWithEmailAndPassword =
    (email: string, password: string): Promise<CreateUserResponse> =>
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);


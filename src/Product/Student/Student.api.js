// @flow
import firebase from 'react-native-firebase';

// eslint-disable-next-line import/prefer-default-export
export const updateStudentInfo = (updates: Object) => firebase.database().ref('').update(updates);

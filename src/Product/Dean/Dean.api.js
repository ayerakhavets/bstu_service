// @flow
import firebase from 'react-native-firebase';
import type { StudentInfo } from '../types';

export const getStudentList = async (specialty: string, course: string): StudentInfo[] =>
  firebase.database().ref(`specialties/${specialty}`)
    .orderByChild('course')
    .equalTo(course)
    .once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

export const getPaymentList = (uid: string): PaymentData[] =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/payments/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
    .then(response => response._value);

export const removePayment = async (
  databasePath: string, storagePath: string): Promise<void> => {
  await firebase.storage().ref(`${storagePath}`).delete();
  return firebase.database().ref(`/payments/${databasePath}`).remove();
};

export const getPaymentImageUrl = (storageImagePath: string): Promise<string> =>
  firebase.storage().ref(storageImagePath).getDownloadURL();

export const resolvePayment = (uid, key, isResolved) =>
  firebase.database().ref(`payments/${uid}/${key}`).child('isResolved').set(isResolved);

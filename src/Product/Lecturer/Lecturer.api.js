// @flow
import firebase from 'react-native-firebase';
import type { StudentInfo } from '../types';

export const getStudentList = async (lecturerUid: string, subject: string): StudentInfo[] =>
  firebase.database().ref(`lecturers/${lecturerUid}/subjects/${subject}`)
    .once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

const lecturerUid = 'eZZKqqMXmVNqQ7wUacZiVDtAQWK2';

export const getOrderList = (uid: string): PaymentData[] =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/orders/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
    .then(response => response._value);

export const removePayment = async (
  databasePath: string, storagePath: string): Promise<void> => {
  await firebase.storage().ref(`${storagePath}`).delete();
  return firebase.database().ref(`/payments/${databasePath}`).remove();
};

export const getPaymentImageUrl = (storageImagePath: string): Promise<string> =>
  firebase.storage().ref(storageImagePath).getDownloadURL();

export const closeOrder = async (uid, key, mark) => {
  await firebase.database().ref(`orders/${uid}/${key}`).child('status').set('closed');
  return firebase.database().ref(`orders/${uid}/${key}`).child('mark').set(mark);
}

export const setOrder = async (uid, key, status, date) =>{
  await firebase.database().ref(`orders/${uid}/${key}`).child('date').set(date);
  return firebase.database().ref(`orders/${uid}/${key}`).child('status').set(status);

}

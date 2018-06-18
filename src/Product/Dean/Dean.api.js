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

export const resolvePayment = (uid, key, status) =>
  firebase.database().ref(`payments/${uid}/${key}`).child('status').set(status);

const lecturerUid = 'eZZKqqMXmVNqQ7wUacZiVDtAQWK2';

export const handleReslovePayment = async (uid, key, order, student) => {
  await firebase.database().ref(`payments/${uid}/${key}`).child('status').set('approved');

  const updates = {};
  updates[`/orders/${uid}/${key}`] = order;
  updates[`/lecturers/${lecturerUid}/subjects/${order.subject}/${uid}`] = student;
  return firebase.database().ref('').update(updates);
};

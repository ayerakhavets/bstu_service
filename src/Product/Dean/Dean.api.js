// @flow
import firebase from 'react-native-firebase';
import type { OrderData, PaymentData, StudentInfo } from '../types';
import { lecturerUid } from '../Authentication/Authentication.constants';

export const getStudentList = async (specialty: string, course: string): StudentInfo[] =>
  // $FlowFixMe
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

export const resolvePayment = (uid: string, key: string, status: string) =>
  firebase.database().ref(`payments/${uid}/${key}`).child('status').set(status);

export const handleReslovePayment = async (uid: string, key: string, order: any, student: StudentInfo) => {
  await firebase.database().ref(`payments/${uid}/${key}`).child('status').set('approved');

  const updates = {};
  updates[`/orders/${uid}/${key}`] = order;
  updates[`/lecturers/${lecturerUid}/subjects/${order.subject}/${uid}`] = student;
  return firebase.database().ref('').update(updates);
};

export const getOrderList = (uid: string): OrderData[] =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/orders/${uid}`)
    .once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

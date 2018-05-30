// @flow
import firebase from 'react-native-firebase';
import type { StudentInfo } from '../types';

export const updateStudentInfo = (studentInfo: StudentInfo, uid: string): Promise<void> => {
  const updates = {};
  updates[`/students/${uid}`] = studentInfo;
  updates[`/specialties/${studentInfo.specialty}/${uid}`] = studentInfo;
  return firebase.database().ref('').update(updates);
};

export const getPaymentImageUrl = (pathToImage: string): Promise<string> =>
  firebase.storage().ref(pathToImage).getDownloadURL();

// $FlowFixMe property `key` is missing in `Promise`.
export const getNewPaymentKey = () => firebase.database().ref('').child('checks').push().key;

// FIXME: add type for paymentInfo.
export const addPayment = async (
  paymentInfo: Object, pathToImage: string, uid: string, key: string): Promise<void> => {
  if (!pathToImage) throw new Error('Bad params');
  // $FlowFixMe string is incompatible with object.
  await firebase.storage().ref(paymentInfo.pathToImage).putFile(pathToImage);

  const updates = {};
  updates[`/checks/${uid}/${key}`] = paymentInfo;
  // eslint-disable-next-line consistent-return
  return firebase.database().ref('').update(updates);
};

// FIXME: add type to getPaymentList.
export const getPaymentList = (uid: string): Object =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/checks/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
    .then(response => response._value);

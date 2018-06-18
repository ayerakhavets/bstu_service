// @flow
import firebase from 'react-native-firebase';
import type { StudentInfo, OrderData } from '../types';

export const getStudentList = async (lecturerUid: string, subject: string): Promise<StudentInfo[]> =>
  firebase.database().ref(`lecturers/${lecturerUid}/subjects/${subject}`)
    // $FlowFixMe function once() requires another argument.
    .once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

export const getOrderList = (uid: string): OrderData[] =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/orders/${uid}`)
    .once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

export const closeOrder = async (uid: string, key: string, mark: string): Promise<void> => {
  await firebase.database().ref(`orders/${uid}/${key}`).child('mark').set(mark);
  return firebase.database().ref(`orders/${uid}/${key}`).child('status').set('closed');
};

export const setOrder = async (uid: string, key: string, date: string): Promise<void> => {
  await firebase.database().ref(`orders/${uid}/${key}`).child('date').set(date);
  return firebase.database().ref(`orders/${uid}/${key}`).child('status').set('set');
};

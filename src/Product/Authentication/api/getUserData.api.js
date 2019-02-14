
// @flow
import firebase from 'react-native-firebase';
import type { StudentInfo } from '../../types';

// FIXME: move to StudentInfo component.
const getUserData = (uid: string): StudentInfo =>
  // $FlowFixMe `once()` requires another argument.
  firebase.database().ref(`/students/${uid}`).once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle

export default getUserData;

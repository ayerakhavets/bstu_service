// @flow
// eslint-disable-next-line react-native/split-platform-components
import { ToastAndroid } from 'react-native';

// TODO: implement showing toast on iOS.
function show(message: string) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}

export default {
  show
};

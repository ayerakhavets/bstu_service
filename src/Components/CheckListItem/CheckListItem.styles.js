// @flow
import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.greenDark,
    justifyContent: 'center',
    width: '100%',
    height: 50,
    margin: 10
  },
  text: {
    color: colors.white,
    fontSize: 16
  }
});

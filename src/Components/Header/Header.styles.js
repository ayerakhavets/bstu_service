// @flow
import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.greenLight,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 57,
    paddingHorizontal: 16,
    width: '100%'
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

// @flow
import { StyleSheet } from 'react-native';
import { colors } from '../../../Components';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    padding: 10,
    paddingBottom: 20
  },
  button: {
    alignSelf: 'flex-end',
    height: 40,
    width: 140
  },
  firstSecondNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  firstSecondNameInput: {
    flex: 1
  },
  input: {
    width: '100%'
  }
});

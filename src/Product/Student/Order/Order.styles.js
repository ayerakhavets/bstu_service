// @flow
import { StyleSheet } from 'react-native';
import { colors } from '../../../Components';

export { colors };

export default StyleSheet.create({
  buttonAdd: {
    marginTop: 10,
    width: '100%'
  },
  buttonIcon: {
    alignSelf: 'flex-end',
    margin: 10,
    width: 50
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.greyLight,
    borderRadius: 3,
    marginBottom: 10,
    padding: 10,
    width: '100%'
  },
  dateView: {
    width: '100%',
    flexDirection: 'row'
  },
  datePicker: {
    alignSelf: 'flex-start',
    width: 150
  },
  datePlaceholderText: {
    color: colors.black
  },
  image: {
    borderWidth: 1,
    borderColor: colors.grey,
    height: 400,
    marginBottom: 10,
    resizeMode: 'contain',
    width: '100%'
  },
  input: {
    width: 100
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

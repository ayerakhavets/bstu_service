// @flow
import { StyleSheet } from 'react-native';
import { colors } from '../../../Components';

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
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.greyLight,
    padding: 10,
    marginBottom: 10
  },
  datePicker: {
    marginLeft: 10,
    width: 200
  },
  datePlaceholderText: {
    color: colors.black
  },
  image: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 10
  },
  input: {
    width: 66
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

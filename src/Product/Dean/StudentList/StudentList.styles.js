// @flow
import { StyleSheet } from 'react-native';
import { colors } from '@my/components';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.white
  },
  emptyItemContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatList: {
    marginTop: 10,
    width: '100%'
  },
  searchBarContainer: {
    backgroundColor: colors.greenLight,
    width: '100%'
  }
});

// @flow
import React from 'react';
import { connect } from 'react-redux';

import Icon, { type MaterialCommunityIconsGlyphs } from 'react-native-vector-icons/MaterialCommunityIcons';
import { logOut } from '../../Product/Authentication/Authentication.actions';

import styles from './HeaderRight.styles';
import colors from '../colors';

type HeaderRightProps = {
  iconName: MaterialCommunityIconsGlyphs,
  onIconPress: () => void,
  onLogOut: () => void
}

function HeaderRight(props: HeaderRightProps) {
  const { iconName = 'exit-to-app', onIconPress, onLogOut } = props;

  return (
    <Icon
      style={ styles.icon }
      color={ colors.white }
      name={ iconName }
      size={ 24 }
      onPress={ onIconPress || onLogOut }
    />
  );
}

const mapDispatchToProps = {
  onLogOut: logOut
};

export default connect(null, mapDispatchToProps)(HeaderRight);

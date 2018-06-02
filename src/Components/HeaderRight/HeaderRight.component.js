// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './HeaderRight.styles';
import colors from '../colors';

type HeaderRightProps = {
  iconName: string,
  onIconPress: () => void
}

function HeaderRight(props: HeaderRightProps) {
  const { iconName, onIconPress } = props;

  return (
    <Icon
      style={ styles.icon }
      color={ colors.white }
      name={ iconName }
      size={ 24 }
      onPress={ onIconPress }
    />
  );
}

export default HeaderRight;

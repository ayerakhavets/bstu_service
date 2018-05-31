// @flow
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './Header.styles';
import colors from '../colors';

type HeaderProps = {
  title: string,
  leftIcon?: {
    name: string,
    onPress: () => void
  }
}

function Header(props: HeaderProps) {
  const { leftIcon, title } = props;

  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{ title }</Text>
      { leftIcon && <Icon
        color={ colors.white }
        name={ leftIcon.name }
        size={ 22 }
        onPress={ leftIcon.onPress }
      /> }
    </View>
  );
}

export default Header;

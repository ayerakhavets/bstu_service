// @flow
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Header.styles';

type HeaderProps = {
  title: string
}

function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>{ title }</Text>
    </View>
  );
}

export default Header;

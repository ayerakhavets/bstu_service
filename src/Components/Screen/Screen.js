// @flow
import React, { type Node } from 'react';
import { ScrollView } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import styles from './Screen.styles';


export type ScreenProps = {
  children?: Node,
  style?: ViewStyleProp
}


function Screen({ children, style }: ScreenProps) {
  return (
    <ScrollView
      contentContainerStyle={ [styles.container, style] }
      alwaysBounceVertical={ false }
      automaticallyAdjustContentInsets={ false }
    >
      { children }
    </ScrollView>
  );
}


export default Screen;

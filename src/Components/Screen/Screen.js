// @flow
import React, { type Node } from 'react';
import { ScrollView } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import styles from './Screen.styles';


export type ScreenProps = {
  children?: Node,
  style?: StyleObj
}


function Screen({ children, style }: ScreenProps) {
  return (
    <ScrollView
      centerContent
      contentContainerStyle={ [styles.container, style] }
      alwaysBounceVertical={ false }
      automaticallyAdjustContentInsets={ false }
    >
      { children }
    </ScrollView>
  );
}


export default Screen;

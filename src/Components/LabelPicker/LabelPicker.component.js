// @flow
import React from 'react';
import { Picker, View } from 'react-native';
import { FormLabel } from 'react-native-elements';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import styles from './LabelPicker.styles';

export type PickerItem = {
  label: string,
  value: string
}

type LabelPickerProps = {
  pickerItems: PickerItem[],
  label: string,
  selectedValue?: string,
  style?: StyleObj,
  onValueChange: () => void
}

function LabelPicker(props: LabelPickerProps) {
  const { label, pickerItems, selectedValue, style, onValueChange } = props;

  const pickerItemComponents: any = pickerItems
    ? pickerItems.map((picker, index) =>
      // eslint-disable-next-line react/no-array-index-key
      <Picker.Item key={ index } label={ picker.label } value={ picker.value } />)
    : null;

  return (
    <View style={ [styles.container, style] }>
      <FormLabel>{ label }</FormLabel>
      <Picker
        style={ styles.picker }
        selectedValue={ selectedValue }
        onValueChange={ onValueChange }
      >
        { pickerItemComponents }
      </Picker>
    </View>
  );
}

export default LabelPicker;

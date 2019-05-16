// @flow
import React from 'react';
import { Picker, View, Text } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import styles from './LabelPicker.styles';

export type PickerItem = {
  label: string,
  value: string
}

const mapItemToPickerItem = (item: string): PickerItem => ({ label: item, value: item });

// FIXME: add Picker styles.
type LabelPickerProps = {
  errorMessage?: ?string,
  isError?: boolean,
  pickerItems: string[],
  label: string,
  selectedValue?: string,
  style?: ViewStyleProp,
  onValueChange: (value: string) => void
}

function LabelPicker(props: LabelPickerProps) {
  const {
    errorMessage,
    label,
    pickerItems,
    selectedValue,
    style,
    onValueChange,
    ...rest
  } = props;

  const mappedPickerItems = pickerItems.map(mapItemToPickerItem);

  const pickerItemComponents: any = pickerItems
    ? mappedPickerItems.map(picker =>
      <Picker.Item key={ picker.label } label={ picker.label } value={ picker.value } />)
    : null;

  return (
    <View style={ [styles.container, style] }>
      <Text style={ styles.labelText }>{ label }</Text>
      <Picker
        style={ styles.picker }
        selectedValue={ selectedValue }
        onValueChange={ onValueChange }
        { ...rest }
      >
        { pickerItemComponents }
      </Picker>
      { !!errorMessage && <Text style={ styles.errorText }>{ errorMessage }</Text> }
    </View>
  );
}

export default LabelPicker;

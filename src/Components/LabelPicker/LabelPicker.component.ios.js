// @flow
import React, { Component } from 'react';
import { Picker, View, Text, TouchableOpacity } from 'react-native';
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
  pickerItems: string[],
  label: string,
  selectedValue?: string,
  style?: ViewStyleProp,
  onValueChange: (value: string) => void
}

type LabelPickerState = {
  isPickerShown: boolean
}

class LabelPicker extends Component<LabelPickerProps, LabelPickerState> {
  constructor(props: LabelPickerProps) {
    super(props);
    this.state = { isPickerShown: false };
  }

  onPress = () => {
    this.setState({
      isPickerShown: !this.state.isPickerShown
    });
  }

  onPickerValueChange = (value: string) => {
    this.setState({
      isPickerShown: !this.state.isPickerShown
    });

    this.props.onValueChange(value);
  }

  render() {
    const {
      errorMessage,
      label,
      pickerItems,
      selectedValue,
      style,
      onValueChange,
      ...rest
    } = this.props;

    const mappedPickerItems = pickerItems.map(mapItemToPickerItem);

    const pickerItemComponents: any = pickerItems
      ? mappedPickerItems.map(picker =>
        <Picker.Item key={ picker.label } label={ picker.label } value={ picker.value } />)
      : null;

    return (<View style={ [styles.container, style] }>
      <Text style={ styles.labelText }>{ label }</Text>
      <TouchableOpacity
        style={ styles.button }
        onPress={ this.onPress }
      >
        <Text>{ selectedValue }</Text>

      </TouchableOpacity>
      { this.state.isPickerShown && <Picker
        selectedValue={ selectedValue }
        onValueChange={ this.onPickerValueChange }
        { ...rest }
      >
        { pickerItemComponents }
      </Picker>
      }
      { !!errorMessage && <Text style={ styles.errorText }>{ errorMessage }</Text> }
    </View>);
  }
}

export default LabelPicker;

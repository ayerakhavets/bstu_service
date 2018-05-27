// @flow
import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Button, LabelPicker, type PickerItem } from '../../../Components';
import styles from './AddCheck.styles';
import {
  addCheck,
  changeDate,
  changeMoneyAmount,
  changePaymentType
} from './CheckList.actions';
import {
  selectDate,
  selectPaymentType,
  selectMoneyAmount,
  selectMappedPaymentTypes
} from './CheckList.selectors';

type AddCheckProps = {
  date: string,
  mappedPaymentTypes: PickerItem[],
  moneyAmount: string,
  paymentType: string,
  addImage: () => void,
  onChangeDate: () => void,
  onChangeMoneyAmount: () => void,
  onChangePaymentType: () => void,
  onAddCheck: () => void
}

// eslint-disable-next-line react/prefer-stateless-function
class AddCheck extends Component<AddCheckProps> {
  render() {
    // FIXME: move ScrollView with default styles to Components.
    return (
      <ScrollView style={ styles.container }>
        <View style={ styles.editContainer }>
          <View style={ styles.moneyContainer }>
            <TextInput
              style={ styles.input }
              maxLength={ 7 }
              value={ this.props.moneyAmount }
              keyboardType="numeric"
              onChangeText={ this.props.onChangeMoneyAmount }
            />
            <Text>BYN</Text>
            <Button
              title="ICON"
              style={ styles.button }
              onPress={ this.props.addImage }
            />
          </View>

          <DatePicker
            style={ styles.datePicker }
            date={ this.props.date }
            placeholder="Выберите дату"
            customStyles={{
              placeholderText: styles.datePlaceholderText
            }}
            format="DD MM YYYY"
            confirmBtnText="Ок"
            cancelBtnText="Закрыть"
            onDateChange={ this.props.onChangeDate }
          />

          <LabelPicker
            label="Тип выплаты"
            selectedValue={ this.props.paymentType }

            pickerItems={ this.props.mappedPaymentTypes }
            onValueChange={ this.props.onChangePaymentType }
          />

          <Button
            title="Добавить"
            style={ styles.button }
            onPress={ this.props.onAddCheck }
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  date: selectDate(state),
  mappedPaymentTypes: selectMappedPaymentTypes(state),
  moneyAmount: selectMoneyAmount(state),
  paymentType: selectPaymentType(state)
});

const mapDispatchToProps = {
  onAddCheck: addCheck,
  onChangeDate: changeDate,
  onChangeMoneyAmount: changeMoneyAmount,
  onChangePaymentType: changePaymentType
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCheck);

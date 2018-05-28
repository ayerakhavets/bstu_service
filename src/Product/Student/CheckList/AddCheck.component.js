// @flow
import React, { Component, Fragment } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';
import { LabelPicker, type PickerItem } from '../../../Components';
import styles, {greenDark} from './AddCheck.styles';
import {
  addCheck,
  changeDate,
  changeMoneyAmount,
  changePaymentType,
  openImagePicker
} from './CheckList.actions';
import {
  selectDate,
  selectImage,
  selectMappedPaymentTypes,
  selectMoneyAmount,
  selectPaymentType
} from './CheckList.selectors';

type AddCheckProps = {
  date: string,
  // FIXME: type.
  image: Object,
  moneyAmount: string,
  paymentType: string,
  paymentTypes: PickerItem[],
  onAddCheck: () => void,
  onChangeDate: () => void,
  onChangeMoneyAmount: () => void,
  onChangePaymentType: () => void,
  onOpenImagePicker: () => void
}

// FIXME: use https://github.com/wix/react-native-calendars instead of DatePicker.
// eslint-disable-next-line react/prefer-stateless-function
class AddCheck extends Component<AddCheckProps> {
  render() {
    console.log('ddChecka', this.props);
    // FIXME: move ScrollView with default styles to Components.
    // source={{uri: iconName}}/>

    return (
      <ScrollView style={ styles.container }>
        <Image
          style={{ width: '100%', height: 400, resizeMode: Image.resizeMode.contain }}
          source={{ uri: `file://${this.props.image.localPath}` }}
        />
        <View style={ styles.editContainer }>
          <View style={ styles.moneyContainer }>
          <Fragment>
            <TextInput
              style={ styles.input }
              maxLength={ 7 }
              value={ this.props.moneyAmount }
              keyboardType="numeric"
              onChangeText={ this.props.onChangeMoneyAmount }
            />
            <Text>BYN</Text>
            </Fragment>
            <Button
              title=""
              backgroundColor={ greenDark }
              containerViewStyle={ styles.button}
              icon={{name: 'ios-image', type: 'ionicon', size: 18}}
              raised
              onPress={ this.props.onOpenImagePicker }
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
            label="Тип услуги"
            selectedValue={ this.props.paymentType }
            pickerItems={ this.props.paymentTypes }
            onValueChange={ this.props.onChangePaymentType }
          />

          <Button
            backgroundColor={ greenDark }
            raised
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
  image: selectImage(state),
  moneyAmount: selectMoneyAmount(state),
  paymentType: selectPaymentType(state),
  paymentTypes: selectMappedPaymentTypes(state)
});

const mapDispatchToProps = {
  onAddCheck: addCheck,
  onChangeDate: changeDate,
  onChangeMoneyAmount: changeMoneyAmount,
  onChangePaymentType: changePaymentType,
  onOpenImagePicker: openImagePicker
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCheck);

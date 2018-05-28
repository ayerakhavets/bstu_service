// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Screen, LabelPicker, MyButton, type PickerItem } from '../../../Components';
import styles from './AddCheck.styles';
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
  selectIsLoading,
  selectMappedPaymentTypes,
  selectMoneyAmount,
  selectPaymentType
} from './CheckList.selectors';

type AddCheckProps = {
  date: string,
  // FIXME: type.
  image: Object,
  isLoading: boolean,
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
// FIXME: add prop for not generating data field to ImagePicker.
// eslint-disable-next-line react/prefer-stateless-function
class AddCheck extends Component<AddCheckProps> {
  render() {
    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <Image
              source={{ uri: `file://${this.props.image.localPath}` }}
              style={ styles.image }
            />
            <View style={ styles.container }>
              <View style={ styles.rowContainer }>
                <View style={ styles.inputContainer }>
                  <TextInput
                    keyboardType="numeric"
                    maxLength={ 8 }
                    style={ styles.input }
                    value={ this.props.moneyAmount }
                    onChangeText={ this.props.onChangeMoneyAmount }
                  />
                  <Text>BYN</Text>
                </View>
                <MyButton
                  containerViewStyle={ styles.buttonIcon }
                  icon={{ name: 'ios-image', type: 'ionicon', size: 18 }}
                  title=""
                  onPress={ this.props.onOpenImagePicker }
                />
              </View>
              <DatePicker
                cancelBtnText="Закрыть"
                confirmBtnText="Ок"
                customStyles={{
                  placeholderText: styles.datePlaceholderText
                }}
                date={ this.props.date }
                format="DD MM YYYY"
                placeholder="Выберите дату"
                style={ styles.datePicker }
                onDateChange={ this.props.onChangeDate }
              />
              <LabelPicker
                label="Тип услуги"
                pickerItems={ this.props.paymentTypes }
                selectedValue={ this.props.paymentType }
                onValueChange={ this.props.onChangePaymentType }
              />
              <MyButton
                containerViewStyle={ styles.buttonAdd }
                title="Добавить"
                onPress={ this.props.onAddCheck }
              />
            </View>
          </Fragment> }
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  date: selectDate(state),
  image: selectImage(state),
  isLoading: selectIsLoading(state),
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

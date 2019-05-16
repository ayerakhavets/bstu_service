// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Input } from 'react-native-elements';
import {
  HeaderRight,
  MyButton,
  Screen
} from '@my/components';
import { I18n } from '@my/framework';
import { type StudentInfo } from '../../types';
import {
  approvePaymentRequest,
  changeStartDate,
  changeEndDate,
  declinePaymentRequest,
  removePaymentRequest
} from './Payment.actions';
import type { PaymentImage } from './Payment.reducer';
import {
  selectDate,
  selectStartDate,
  selectEndDate,
  selectImage,
  selectLecturer,
  selectSubject,
  selectIsLoading,
  selectMoneyAmount,
  selectPaymentType
} from './Payment.selectors';
import styles, { colors } from './Payment.styles';
import { selectCurrentStudent } from '../StudentList';

type PaymentProps = {
  currentUser: StudentInfo,
  date: string,
  lecturer: string,
  subject: string,
  startDate: string,
  endDate: string,
  image: PaymentImage,
  isLoading: boolean,
  moneyAmount: string,
  navigation: Object,
  paymentType: string,
  onApprovePaymentRequest: () => void,
  onChangeStartDate: (date: string) => void,
  onChangeEndDate: (date: string) => void,
  onDeclinePaymentRequest: () => void,
  onRemovePaymentRequest: () => void
}

class Payment extends Component<PaymentProps> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const onPress = () => Alert.alert(
      I18n.translate('payment.removal'),
      I18n.translate('payment.removeConfirm'),
      [
        { text: I18n.translate('payment.cancel'), style: 'cancel' },
        { text: I18n.translate('payment.remove'), onPress: params.removePayment }
      ]
    );

    return {
      // eslint-disable-next-line react/jsx-no-bind
      headerRight: <HeaderRight iconName="delete" onIconPress={ onPress } />
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ removePayment: this.props.onRemovePaymentRequest });
  }

  render() {
    const name = `${this.props.currentUser.surname}${this.props.currentUser.name}${this.props.currentUser.middleName}`;
    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : (
            <Fragment>
              <Image
                source={{ uri: this.props.image.url }}
                style={ styles.image }
                resizeMethod="resize"
              />
              <View style={ styles.container }>
                <Input
                  label={ I18n.translate('payment.name') }
                  value={ name }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('payment.id') }
                  value={ this.props.currentUser.studentId }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('payment.amount') }
                  value={ `${this.props.moneyAmount} BYN` }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('payment.date') }
                  value={ this.props.date }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('payment.paymentType') }
                  value={ this.props.paymentType }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('payment.subject') }
                  value={ this.props.subject }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('payment.lecturer') }
                  value={ this.props.lecturer }
                  editable={ false }
                />
                <View style={ styles.dateView }>
                  <DatePicker
                    cancelBtnText={ I18n.translate('payment.cancel') }
                    confirmBtnText={ I18n.translate('payment.ok') }
                    customStyles={{
                      placeholderText: styles.datePlaceholderText
                    }}
                    date={ this.props.startDate }
                    format="DD MM YYYY"
                    placeholder={ I18n.translate('payment.dateFrom') }
                    style={ styles.datePicker }
                    onDateChange={ this.props.onChangeStartDate }
                  />
                  <DatePicker
                    cancelBtnText={ I18n.translate('payment.cancel') }
                    confirmBtnText={ I18n.translate('payment.ok') }
                    customStyles={{
                      placeholderText: styles.datePlaceholderText
                    }}
                    date={ this.props.endDate }
                    format="DD MM YYYY"
                    placeholder={ I18n.translate('payment.dateTo') }
                    style={ styles.datePicker }
                    onDateChange={ this.props.onChangeEndDate }
                  />
                </View>
                <MyButton
                  icon={{ name: 'done' }}
                  containerViewStyle={ styles.buttonAdd }
                  title={ I18n.translate('payment.accept') }
                  onPress={ this.props.onApprovePaymentRequest }
                />
                <MyButton
                  backgroundColor={ colors.red }
                  icon={{ name: 'clear' }}
                  containerViewStyle={ styles.buttonAdd }
                  title={ I18n.translate('payment.decline') }
                  onPress={ this.props.onDeclinePaymentRequest }
                />
              </View>
            </Fragment>
          ) }
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentStudent(state),
  date: selectDate(state),
  lecturer: selectLecturer(state),
  subject: selectSubject(state),
  startDate: selectStartDate(state),
  endDate: selectEndDate(state),
  image: selectImage(state),
  isLoading: selectIsLoading(state),
  moneyAmount: selectMoneyAmount(state),
  paymentType: selectPaymentType(state)
});

const mapDispatchToProps = {
  onApprovePaymentRequest: approvePaymentRequest,
  onDeclinePaymentRequest: declinePaymentRequest,
  onRemovePaymentRequest: removePaymentRequest,
  onChangeStartDate: changeStartDate,
  onChangeEndDate: changeEndDate
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { I18n } from '@my/framework';
import { PaymentListItem, MyButton } from '@my/components';
import { type PaymentData } from '../../types';
import { selectIsLoading, selectPaymentList } from './PaymentList.selectors';
import * as actions from './PaymentList.actions';
import styles from './PaymentList.styles';

type PaymentListProps = {
  isLoading: boolean,
  paymentList: PaymentData[],
  loadPaymentListRequest: () => void,
  openAddPaymentScreen: () => void,
  openShowPaymentScreen: (payment: PaymentData) => void
}

class PaymentList extends Component<PaymentListProps> {
  componentDidMount() {
    this.props.loadPaymentListRequest();
  }

  keyExtractor = (checkItem: PaymentData) => checkItem.key;

  renderEmptyItem = () => (
    <View style={ styles.emptyItemContainer }>
      <Text>{ I18n.translate('student.paymentList.emptyList') }</Text>
    </View>
  )

  renderPaymentItem = ({ item }) => (
    <PaymentListItem
      item={ item }
      onPress={ this.props.openShowPaymentScreen }
    />
  )

  render() {
    return (
      <View style={ styles.container }>
        <MyButton
          title={ I18n.translate('student.paymentList.newPayment') }
          onPress={ this.props.openAddPaymentScreen }
        />
        <FlatList
          data={ this.props.paymentList }
          keyExtractor={ this.keyExtractor }
          ListEmptyComponent={ this.renderEmptyItem }
          refreshing={ this.props.isLoading }
          renderItem={ this.renderPaymentItem }
          style={ styles.flatList }
          onRefresh={ this.props.loadPaymentListRequest }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  paymentList: selectPaymentList(state)
});

const mapDispatchToProps = {
  loadPaymentListRequest: actions.loadPaymentListRequest,
  openAddPaymentScreen: actions.openAddPaymentScreen,
  openShowPaymentScreen: actions.openShowPaymentScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList);

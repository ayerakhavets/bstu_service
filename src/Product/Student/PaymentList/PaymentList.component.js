// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { PaymentListItem, MyButton } from '../../../Components';
import type { PaymentData } from '../../types';
import {
  loadPaymentListRequest,
  openShowPaymentScreen,
  openAddPaymentScreen
} from './PaymentList.actions';
import { selectPaymentList } from './PaymentList.selectors';
import styles from './PaymentList.styles';

type PaymentListProps = {
  paymentList: PaymentData[],
  loadPaymentListRequest: () => void,
  openAddPaymentScreen: () => void,
  openShowPaymentScreen: (payment: PaymentData) => void
}

class PaymentList extends Component<PaymentListProps> {
  componentDidMount() {
    this.props.loadPaymentListRequest();
  }

  keyExtractor = checkItem => checkItem.key;

  renderItem = ({ item }) => (
    <PaymentListItem
      item={ item }
      onPress={ this.props.openShowPaymentScreen }
    />)

  render() {
    return (
      <View style={ styles.container }>
        <MyButton
          title="Добавить запись"
          onPress={ this.props.openAddPaymentScreen }
        />
        <FlatList
          data={ this.props.paymentList }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
          style={ styles.flatList }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  paymentList: selectPaymentList(state)
});

const mapDispatchToProps = {
  loadPaymentListRequest,
  openAddPaymentScreen,
  openShowPaymentScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList);

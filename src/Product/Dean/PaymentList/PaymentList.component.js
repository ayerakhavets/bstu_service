// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { PaymentListItem } from '@my/components';
import type { PaymentData } from '../../types';
import {
  loadPaymentListRequest,
  openShowPaymentScreen
} from './PaymentList.actions';
import { selectIsLoading, selectPaymentList } from './PaymentList.selectors';
import styles from './PaymentList.styles';

type PaymentListProps = {
  isLoading: boolean,
  paymentList: PaymentData[],
  loadPaymentListRequest: () => void,
  openShowPaymentScreen: (payment: PaymentData) => void
}

class PaymentList extends Component<PaymentListProps> {
  componentDidMount() {
    this.props.loadPaymentListRequest();
  }

  keyExtractor = checkItem => checkItem.key;

  renderEmptyItem = () => (<View style={ styles.emptyItemContainer }>
    <Text>Список платежей пуст. Потяните для обновления</Text>
  </View>)

  renderItem = ({ item }) => (
    <PaymentListItem
      item={ item }
      onPress={ this.props.openShowPaymentScreen }
    />)

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.props.paymentList }
          keyExtractor={ this.keyExtractor }
          ListEmptyComponent={ this.renderEmptyItem }
          refreshing={ this.props.isLoading }
          renderItem={ this.renderItem }
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
  loadPaymentListRequest,
  openShowPaymentScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentList);

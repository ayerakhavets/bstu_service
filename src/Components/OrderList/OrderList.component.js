// @flow
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { I18n } from '@my/framework';
import OrderListItem from './OrderListItem';
import { type OrderData } from '../../Product/types';
import styles from './OrderList.styles';

type OrderListProps = {
  isLoading: boolean,
  orderList: OrderData[],
  loadOrderList: () => void,
  onOpenOrderInfo: (payment: OrderData) => void
}

class OrderList extends Component<OrderListProps> {
  componentDidMount() {
    this.props.loadOrderList();
  }

  keyExtractor = (order: any) => order.key;

  renderEmptyItem = () => (
    <View style={ styles.emptyItemContainer }>
      <Text>{ I18n.translate('orderList.pullToRefresh') }</Text>
    </View>
  )

  renderItem = ({ item }: any) => (
    <OrderListItem
      item={ item }
      onPress={ this.props.onOpenOrderInfo }
    />
  )

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ this.props.orderList }
          keyExtractor={ this.keyExtractor }
          ListEmptyComponent={ this.renderEmptyItem }
          refreshing={ this.props.isLoading }
          renderItem={ this.renderItem }
          style={ styles.flatList }
          onRefresh={ this.props.loadOrderList }
        />
      </View>
    );
  }
}

export default OrderList;

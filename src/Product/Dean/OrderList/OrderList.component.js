// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { PaymentListItem } from '../../../Components';
import type { OrderData } from '../../types';
import {
  loadOrderListRequest,
  openOrderInfo
} from './OrderList.actions';
import { selectIsLoading, selectOrderList } from './OrderList.selectors';
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

  keyExtractor = order => order.key;

  renderEmptyItem = () => (<View style={ styles.emptyItemContainer }>
    <Text>Список направлений пуст. Потяните для обновления</Text>
  </View>)

  renderItem = ({ item }) => (<PaymentListItem
    item={ item }
    onPress={ this.props.onOpenOrderInfo }
  />)

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

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  orderList: selectOrderList(state)
});

const mapDispatchToProps = {
  loadOrderList: loadOrderListRequest,
  onOpenOrderInfo: openOrderInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);

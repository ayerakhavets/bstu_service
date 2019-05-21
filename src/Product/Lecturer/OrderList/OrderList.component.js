// @flow
import { connect } from 'react-redux';
import { OrderList } from '@my/components';
import { loadOrderListRequest, openOrderInfo } from './OrderList.actions';
import { selectIsLoading, selectOrderList } from './OrderList.selectors';

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  orderList: selectOrderList(state)
});

const mapDispatchToProps = {
  loadOrderList: loadOrderListRequest,
  onOpenOrderInfo: openOrderInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);

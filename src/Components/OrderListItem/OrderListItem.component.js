// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
// import type { PaymentData } from '../../Product/types';
import colors from '../colors';
import styles from './OrderListItem.styles';

type PaymentListItemProps = {
  item: Object,
  onPress: (payment: Object) => void
}

function PaymentListItem(props: PaymentListItemProps) {
  const { item, onPress } = props;

  const handleOnPress = () => onPress(item);

  const subtitle = () => {
    if (item.status === 'planning') {
      return (<View style={ styles.subtitle }>
        <Text>{item.subject}</Text>
        <Text style={ styles.paymentTypeText }>{`c '${item.startDate}' по '${item.endDate}'`}</Text>
      </View>);
    } else if (item.status === 'set') {
      return (<View style={ styles.subtitle }>
        <Text>{item.subject}</Text>
        <Text style={ styles.paymentTypeText }>{`дата: '${item.date}'`}</Text>
      </View>);
    }

    return (<View style={ styles.subtitle }>
      <Text>{item.subject}</Text>
      <Text style={ styles.paymentTypeText }>{`дата: '${item.date}' оценка: ${item.mark}}`}</Text>
    </View>);
  };

  let icon = require('../assets/receipt.png'); // eslint-disable-line global-require

  if (item.status === 'set') {
    icon = require('../assets/receipt_yel.png'); // eslint-disable-line global-require
  }

  if (item.status === 'closed') {
    icon = require('../assets/receipt_gr.png'); // eslint-disable-line global-require
  }

  return (
    <ListItem
      avatar={ icon }
      avatarContainerStyle={ styles.avatar }
      avatarStyle={ styles.avatar }
      containerStyle={ styles.container }
      chevronColor={ colors.greenDark }
      subtitle={ subtitle() }
      title={ `${item.subject}` }
      underlayColor={ colors.greenDark }
      // eslint-disable-next-line react/jsx-no-bind
      onPress={ handleOnPress }
    />
  );
}

export default PaymentListItem;

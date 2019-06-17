// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import colors from '../../colors';
import styles from './OrderListItem.styles';

type PaymentListItemProps = {
  item: Object,
  onPress: (payment: Object) => void
}

function PaymentListItem(props: PaymentListItemProps) {
  const { item, onPress } = props;

  const handleOnPress = () => onPress(item);

  const subtitle = () => {
    let paymentTypeText = `дата: ${item.date} оценка: ${item.mark}`;
    if (item.status === 'planning') {
      paymentTypeText = `c ${item.startDate} по ${item.endDate}`;
    } else if (item.status === 'set') {
      paymentTypeText = `дата: ${item.date}`;
    }

    return (
      <View style={ styles.subtitle }>
        <Text>{item.student && item.student.surname}</Text>
        <Text style={ styles.paymentTypeText }>{ paymentTypeText }</Text>
      </View>
    );
  };

  let icon = require('../../assets/receipt.png'); // eslint-disable-line global-require

  if (item.status === 'set') {
    icon = require('../../assets/receipt_yel.png'); // eslint-disable-line global-require
  }

  if (item.status === 'closed') {
    icon = require('../../assets/receipt_gr.png'); // eslint-disable-line global-require
  }

  return (
    <ListItem
      leftAvatar={{ source: icon }}
      // avatarContainerStyle={ styles.avatar }
      // avatarStyle={ styles.avatar }
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

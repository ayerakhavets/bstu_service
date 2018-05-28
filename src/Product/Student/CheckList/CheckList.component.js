// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MyButton } from '../../../Components';
import { loadChecks } from './CheckList.actions';
import { selectChecks } from './CheckList.selectors';
import styles from './CheckList.styles';

type CheckListProps = {
  checks: any,
  navigation: Object,
  onLoadChecks: () => void
}

// eslint-disable-next-line react/prefer-stateless-function
class CheckList extends Component<CheckListProps> {
  componentDidMount() {
    this.props.onLoadChecks();
  }

  componentDidUpdate() {
    this.props.onLoadChecks();
  }

  handleAddRecord = () => {
    this.props.navigation.navigate('Чек');
  }

  render() {
    console.log('=== checks', this.props.checks);

    return (
      <View style={ styles.container }>
        <MyButton
          title="Добавить запись"
          onPress={ this.handleAddRecord }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  checks: selectChecks(state)
});

const mapDispatchToProps = {
  onLoadChecks: loadChecks
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);

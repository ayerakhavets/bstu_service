// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, SectionList, Text } from 'react-native';
import { Button } from '../../../Components';
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
        <Button
          title="Добавить запись"
          onPress={ this.handleAddRecord }
        />
        <SectionList
          renderItem={ ({ item, index, section }) => <Text key={ index }>{item}</Text> }
          renderSectionHeader={ ({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          ) }
          sections={ [
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] }
          ] }
          keyExtractor={ (item, index) => item + index }
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

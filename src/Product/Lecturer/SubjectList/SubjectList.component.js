// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { colors } from '@my/components';
import { openStudentList, type NavigationParams } from './SubjectList.actions';
import styles from './SubjectList.styles';

type SubjectListProps = {
  onOpenStudentList: (navigationParams: NavigationParams) => void
}

const list = [
  'БД',
  'СУБД'
];

class SubjectList extends React.Component<SubjectListProps> {
  keyExtractor = (item, index) => item + index

  renderItem = ({ item }) => (
    <ListItem
      chevronColor={ colors.greenDark }
      title={ item }
      // eslint-disable-next-line react/jsx-no-bind
      onPress={ () => this.props.onOpenStudentList({ subject: item }) }
    />
  )

  render() {
    return (
      <FlatList
        data={ list }
        keyExtractor={ this.keyExtractor }
        renderItem={ this.renderItem }
        style={ styles.list }
      />
    );
  }
}

const mapDispatchToProps = {
  onOpenStudentList: openStudentList
};

export default connect(null, mapDispatchToProps)(SubjectList);

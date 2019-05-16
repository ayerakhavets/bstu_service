// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { colors, HeaderRight } from '@my/components';
import { logOut } from '../../Authentication';
import { openStudentList, type NavigationParams } from './SubjectList.actions';
import styles from './SubjectList.styles';

type SubjectListProps = {
  navigation: Object,
  onOpenStudentList: (navigationParams: NavigationParams) => void,
  onLogOut: () => void,
}

const list = [
  'БД',
  'СУБД'
];

class SubjectList extends React.Component<SubjectListProps> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: <HeaderRight iconName="exit-to-app" onIconPress={ params.onLogOut } />
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ onLogOut: this.props.onLogOut });
  }

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
  onOpenStudentList: openStudentList,
  onLogOut: logOut
};

export default connect(null, mapDispatchToProps)(SubjectList);

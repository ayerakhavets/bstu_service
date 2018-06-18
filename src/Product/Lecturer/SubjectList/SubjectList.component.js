// @flow
import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { colors, HeaderRight } from '../../../Components';
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

  renderItem = item => (<ListItem
    chevronColor={ colors.greenDark }
    title={ item }
    // eslint-disable-next-line react/jsx-no-bind
    onPress={ () => this.props.onOpenStudentList({ subject: item }) }
  />)

  render() {
    return (
      <List containerStyle={ styles.list }>
        { list.map(this.renderItem) }
      </List>
    );
  }
}

const mapDispatchToProps = {
  onOpenStudentList: openStudentList,
  onLogOut: logOut
};

export default connect(null, mapDispatchToProps)(SubjectList);

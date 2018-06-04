// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import type { StudentInfo } from '../../types';
import {
  loadStudentListRequest,
  openPaymentList
} from './StudentList.actions';
import { selectIsLoading, selectStudentList } from './StudentList.selectors';
import styles from './StudentList.styles';
import { colors } from '../../../Components';

type StudentListProps = {
  isLoading: boolean,
  studentList: StudentInfo[],
  loadStudentList: () => void,
  onOpenPaymentList: () => void
}

class StudentList extends Component<StudentListProps> {
  componentDidMount() {
    this.props.loadStudentList();
  }

  keyExtractor = (studentInfo: StudentInfo) => studentInfo.uid;

  renderEmptyItem = () => (<View style={ styles.emptyItemContainer }>
    <Text>Список студентов пуст. Потяните для обновления</Text>
  </View>)

  renderItem = ({ item }) => (
    <ListItem
      keyExtractor={ this.keyExtractor }
      title={ `${item.name} ${item.surname} ${item.middleName}` }
      subtitle={ item.studentId }
      // eslint-disable-next-line react/jsx-no-bind
      onPress={ () => this.props.onOpenPaymentList(item) }
    />)

  render() {
    return (
      <View style={ styles.container }>
        <SearchBar
          lightTheme
          clearIcon
          borderColor={ colors.greenLight }
          containerStyle={{
            backgroundColor: colors.greenLight,
            width: '100%'
          }}
          onChangeText={ () => console.log('onChangeText') }
          onClearText={ () => console.log('onClearText') }
          placeholder="Type Here..."
        />
        <FlatList
          data={ this.props.studentList }
          keyExtractor={ this.keyExtractor }
          ListEmptyComponent={ this.renderEmptyItem }
          refreshing={ this.props.isLoading }
          renderItem={ this.renderItem }
          style={ styles.flatList }
          onRefresh={ this.props.loadStudentList }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  studentList: selectStudentList(state)
});

const mapDispatchToProps = {
  loadStudentList: loadStudentListRequest,
  onOpenPaymentList: openPaymentList
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

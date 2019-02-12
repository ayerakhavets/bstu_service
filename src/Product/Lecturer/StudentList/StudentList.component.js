// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { colors } from '@my/components';
import type { StudentInfo } from '../../types';
import {
  loadStudentListRequest,
  openOrderList
} from './StudentList.actions';
import { selectIsLoading, selectStudentList } from './StudentList.selectors';
import styles from './StudentList.styles';

type StudentListProps = {
  isLoading: boolean,
  studentList: StudentInfo[],
  loadStudentList: () => void,
  onOpenOrderList: (student: StudentInfo) => void
}

type StudentListState = {
  searchValue: string
}

class StudentList extends Component<StudentListProps, StudentListState> {
  state = {
    searchValue: ''
  };

  componentDidMount() {
    this.props.loadStudentList();
  }

  onSearchInputChange = (searchValue: string) => this.setState({ searchValue });

  keyExtractor = (studentInfo: StudentInfo) => studentInfo.uid;

  filterItems = () => {
    const { searchValue } = this.state;
    const { studentList } = this.props;

    const searchValueUpper = searchValue.toUpperCase();
    const filterBySearchValue = item => item.surname.toUpperCase().includes(searchValueUpper);

    return searchValueUpper
      ? studentList.filter(filterBySearchValue)
      : studentList;
  };

  renderEmptyItem = () => (<View style={ styles.emptyItemContainer }>
    <Text>Список студентов пуст. Потяните для обновления</Text>
  </View>)

  renderItem = ({ item }) => (<ListItem
    keyExtractor={ this.keyExtractor }
    title={ `${item.surname} ${item.name}  ${item.middleName}` }
    subtitle={ item.studentId }
    // eslint-disable-next-line react/jsx-no-bind
    onPress={ () => this.props.onOpenOrderList(item) }
  />)

  render() {
    return (
      <View style={ styles.container }>
        <SearchBar
          clearIcon
          borderColor={ colors.greenLight }
          containerStyle={ styles.searchBarContainer }
          onChangeText={ this.onSearchInputChange }
          placeholder="Type Here..."
        />
        <FlatList
          data={ this.filterItems() }
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
  onOpenOrderList: openOrderList
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

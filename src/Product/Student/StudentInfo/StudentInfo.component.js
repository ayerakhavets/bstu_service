// @flow
import React, { Component, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import {
  LabelInput,
  LabelPicker,
  MyButton,
  Screen,
  type PickerItem
} from '../../../Components';
// FIXME: cyclic dependency?
import { logOut } from '../../Authentication/Authentication.actions';
import {
  changeCourse,
  changeFaculty,
  changeMiddleName,
  changeName,
  changeSpecialty,
  changeStudentId,
  changeSurname,
  saveStudentInfoRequest
} from './StudentInfo.actions';
import {
  selectCourse,
  selectFaculty,
  selectIsLoading,
  selectMappedCourses,
  selectMappedFaculties,
  selectMappedSpecialties,
  selectMiddleName,
  selectName,
  selectSpecialty,
  selectStudentId,
  selectSurname
} from './StudentInfo.selectors';
import styles from './StudentInfo.styles';

type StudentInfoProps = {
  course: string,
  courses: PickerItem[],
  faculty: string,
  faculties: PickerItem[],
  isLoading: boolean,
  middleName: string,
  name: string,
  navigation: Object,
  specialty: string,
  specialties: PickerItem[],
  studentId: string,
  surname: string,
  changeCourse: () => void,
  changeFaculty: () => void,
  changeMiddleName: () => void,
  changeName: () => void,
  changeSpecialty: () => void,
  changeStudentId: () => void,
  changeSurname: () => void,
  onLogOut: () => void,
  saveStudentInfoRequest: () => void
}

// FIXME: screen with initial data shouldn't be visible while log out.
class StudentInfo extends Component<StudentInfoProps> {
  componentWillMount() {
    this.props.navigation.setParams({ onLogOut: this.props.onLogOut });
  }

  render() {
    return (
      <Screen>
        {this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <View style={ styles.twoItemsContainer }>
              <LabelInput
                isError={ !this.props.name }
                label="Имя"
                value={ this.props.name }
                containerViewStyle={ styles.twoItemsContainerItem }
                onChangeText={ this.props.changeName }
              />
              <LabelInput
                isError={ !this.props.surname }
                label="Фамилия"
                value={ this.props.surname }
                containerViewStyle={ styles.twoItemsContainerItem }
                onChangeText={ this.props.changeSurname }
              />
            </View>
            <LabelInput
              isError={ !this.props.middleName }
              label="Отчество"
              value={ this.props.middleName }
              onChangeText={ this.props.changeMiddleName }
            />
            <LabelInput
              isError={ !this.props.studentId }
              label="Номер билета"
              maxLength={ 8 }
              keyboardType="numeric"
              value={ this.props.studentId }
              onChangeText={ this.props.changeStudentId }
            />
            <View style={ styles.twoItemsContainer }>
              <LabelPicker
                isError={ !this.props.faculty }
                label="Факультет"
                pickerItems={ this.props.faculties }
                selectedValue={ this.props.faculty }
                style={ styles.twoItemsContainerItem }
                onValueChange={ this.props.changeFaculty }
              />
              <LabelPicker
                isError={ !this.props.course }
                label="Курс"
                pickerItems={ this.props.courses }
                selectedValue={ this.props.course }
                style={ styles.twoItemsContainerItem }
                onValueChange={ this.props.changeCourse }
              />
            </View>
            <LabelPicker
              isError={ !this.props.specialty }
              label="Специальность"
              pickerItems={ this.props.specialties }
              selectedValue={ this.props.specialty }
              onValueChange={ this.props.changeSpecialty }
            />
            <MyButton
              containerViewStyle={ styles.button }
              title="Сохранить изменения"
              onPress={ this.props.saveStudentInfoRequest }
            />
          </Fragment> }
      </Screen>);
  }
}

const mapStateToProps = state => ({
  course: selectCourse(state),
  courses: selectMappedCourses(state),
  faculty: selectFaculty(state),
  faculties: selectMappedFaculties(state),
  isLoading: selectIsLoading(state),
  middleName: selectMiddleName(state),
  name: selectName(state),
  specialty: selectSpecialty(state),
  specialties: selectMappedSpecialties(state),
  studentId: selectStudentId(state),
  surname: selectSurname(state)
});

const mapDispatchToProps = {
  changeCourse,
  changeFaculty,
  changeMiddleName,
  changeName,
  changeSpecialty,
  changeStudentId,
  changeSurname,
  saveStudentInfoRequest,
  onLogOut: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);

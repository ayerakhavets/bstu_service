// @flow
import React, { Component, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  LabelInput,
  LabelPicker,
  MyButton,
  Screen,
  type PickerItem
} from '@my/components';
// FIXME: cyclic dependency.
import { logOut } from '../../Authentication/Authentication.actions';
import * as actions from './StudentInfo.actions';
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

class StudentInfo extends Component<StudentInfoProps> {
  componentWillMount() {
    console.log('m?');
    this.props.navigation.setParams({ onLogOut: this.props.onLogOut });
  }

  render() {
    return (
      <Screen>
        {this.props.isLoading
          ? <ActivityIndicator size="large" />
          : (
            <Fragment>
              {/* <View style={ styles.twoItemsContainer }> */}
              <Input
                // labelStyle={{
                //   paddingLeft: 20
                // }}
                // inputStyle={{
                //   height: 40
                // }}
                // inputContainerStyle={{
                //   paddingLeft: 10
                // borderRadius: 45,
                // borderWidth: 1
                // }}
                label="Имя:"
                value={ this.props.name }
                onChangeText={ this.props.changeName }
                placeholder="Имя1"
                errorStyle={{ color: 'red' }}
                errorMessage={ !this.props.name && 'ENTER A VALID ERROR HERE' }
              />
              <Input
                label="Фамилия:"
                value={ this.props.surname }
                onChangeText={ this.props.changeSurname }
                errorStyle={{ color: 'red' }}
                errorMessage={ !this.props.surname && 'ENTER A VALID ERROR HERE' }
              />
              {/* </View> */}
              <Input
                label="Отчество:"
                value={ this.props.middleName }
                onChangeText={ this.props.changeMiddleName }
                errorStyle={{ color: 'red' }}
                errorMessage={ !this.props.middleName && 'ENTER A VALID ERROR HERE' }
              />
              <Input
                label="Номер билета:"
                maxLength={ 8 }
                keyboardType="numeric"
                value={ this.props.studentId }
                onChangeText={ this.props.changeStudentId }
                errorStyle={{ color: 'red' }}
                errorMessage={ !this.props.studentId && 'ENTER A VALID ERROR HERE' }
              />
              <View style={ styles.twoItemsContainer }>
                {/*
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
                /> */}
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
            </Fragment>
          ) }
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
  changeCourse: actions.changeCourse,
  changeFaculty: actions.changeFaculty,
  changeMiddleName: actions.changeMiddleName,
  changeName: actions.changeName,
  changeSpecialty: actions.changeSpecialty,
  changeStudentId: actions.changeStudentId,
  changeSurname: actions.changeSurname,
  saveStudentInfoRequest: actions.saveStudentInfoRequest,
  onLogOut: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);
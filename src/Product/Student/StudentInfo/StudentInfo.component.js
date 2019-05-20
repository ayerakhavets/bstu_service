// @flow
import React, { PureComponent, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { I18n } from '@my/framework';
import { LabelPicker, MyButton, Screen } from '@my/components';
import * as actions from './StudentInfo.actions';
import {
  selectCourse,
  selectFaculty,
  selectIsLoading,
  selectMiddleName,
  selectName,
  selectSpecialty,
  selectStudentId,
  selectSurname
} from './StudentInfo.selectors';
import styles from './StudentInfo.styles';

type StudentInfoProps = {
  course: string,
  courses: string[],
  faculty: string,
  faculties: string[],
  isLoading: boolean,
  middleName: string,
  name: string,
  specialty: string,
  specialties: string[],
  studentId: string,
  surname: string,
  changeCourse: () => void,
  changeFaculty: () => void,
  changeMiddleName: () => void,
  changeName: () => void,
  changeSpecialty: () => void,
  changeStudentId: () => void,
  changeSurname: () => void,
  saveStudentInfoRequest: () => void
}

class StudentInfo extends PureComponent<StudentInfoProps> {
  render() {
    const errorMessage = I18n.translate('student.studentInfo.requiredField').toUpperCase();

    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : (
            <Fragment>
              <Input
                label={ I18n.translate('student.studentInfo.name') }
                value={ this.props.name }
                onChangeText={ this.props.changeName }
                placeholder={ I18n.translate('student.studentInfo.name') }
                errorStyle={ styles.inputError }
                errorMessage={ !this.props.name ? errorMessage : null }
              />
              <Input
                label={ I18n.translate('student.studentInfo.surname') }
                value={ this.props.surname }
                onChangeText={ this.props.changeSurname }
                placeholder={ I18n.translate('student.studentInfo.surname') }
                errorStyle={ styles.inputError }
                errorMessage={ !this.props.surname ? errorMessage : null }
              />
              <Input
                label={ I18n.translate('student.studentInfo.middleName') }
                value={ this.props.middleName }
                onChangeText={ this.props.changeMiddleName }
                placeholder={ I18n.translate('student.studentInfo.middleName') }
                errorStyle={ styles.inputError }
                errorMessage={ !this.props.middleName ? errorMessage : null }
              />
              <Input
                label={ I18n.translate('student.studentInfo.studentId') }
                maxLength={ 8 }
                keyboardType="numeric"
                value={ this.props.studentId }
                onChangeText={ this.props.changeStudentId }
                placeholder="12345678"
                errorStyle={ styles.inputError }
                errorMessage={ !this.props.studentId ? errorMessage : null }
              />
              <View style={ styles.pickersContainer }>
                <LabelPicker
                  style={ styles.picker }
                  errorMessage={ !this.props.faculty ? errorMessage : null }
                  label={ I18n.translate('student.studentInfo.faculty') }
                  pickerItems={ this.props.faculties }
                  selectedValue={ this.props.faculty }
                  onValueChange={ this.props.changeFaculty }
                />
                <LabelPicker
                  style={ styles.picker }
                  errorMessage={ !this.props.course ? errorMessage : null }
                  label={ I18n.translate('student.studentInfo.course') }
                  pickerItems={ this.props.courses }
                  selectedValue={ this.props.course }
                  onValueChange={ this.props.changeCourse }
                />
              </View>
              <LabelPicker
                errorMessage={ !this.props.specialty ? errorMessage : null }
                label={ I18n.translate('student.studentInfo.speciality') }
                pickerItems={ this.props.specialties }
                selectedValue={ this.props.specialty }
                onValueChange={ this.props.changeSpecialty }
              />
              <MyButton
                containerViewStyle={ styles.button }
                title={ I18n.translate('student.studentInfo.save') }
                onPress={ this.props.saveStudentInfoRequest }
              />
            </Fragment>
          ) }
      </Screen>);
  }
}

const mapStateToProps = (state) => {
  const courses = ['', '1', '2', '3', '4'];
  // TODO: translate.
  const faculties = ['', 'ФИТ'];
  const specialties = ['', 'ДЭиВИ', 'ПОиБМС', 'ПОИТ', 'ИСИТ'];

  return {
    course: selectCourse(state),
    courses,
    faculties,
    faculty: selectFaculty(state),
    isLoading: selectIsLoading(state),
    middleName: selectMiddleName(state),
    name: selectName(state),
    specialties,
    specialty: selectSpecialty(state),
    studentId: selectStudentId(state),
    surname: selectSurname(state)
  };
};

const mapDispatchToProps = {
  changeCourse: actions.changeCourse,
  changeFaculty: actions.changeFaculty,
  changeMiddleName: actions.changeMiddleName,
  changeName: actions.changeName,
  changeSpecialty: actions.changeSpecialty,
  changeStudentId: actions.changeStudentId,
  changeSurname: actions.changeSurname,
  saveStudentInfoRequest: actions.saveStudentInfoRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);

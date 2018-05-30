// @flow
import React, { Component, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Header,
  LabelInput,
  LabelPicker,
  MyButton,
  Screen,
  type PickerItem
} from '../../../Components';
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
  saveStudentInfoRequest: () => void
}

// eslint-disable-next-line react/prefer-stateless-function
class StudentInfo extends Component<StudentInfoProps> {
  render() {
    return (
      <Fragment>
        <Header title="Пользователь" />

        <Screen>
          {this.props.isLoading
            ? <ActivityIndicator size="large" />
            : <Fragment>
              <View style={ styles.twoItemsContainer }>
                <LabelInput
                  label="Имя"
                  value={ this.props.name }
                  containerViewStyle={ styles.twoItemsContainerItem }
                  onChangeText={ this.props.changeName }
                />
                <LabelInput
                  label="Фамилия"
                  value={ this.props.surname }
                  containerViewStyle={ styles.twoItemsContainerItem }
                  onChangeText={ this.props.changeSurname }
                />
              </View>
              <LabelInput
                label="Отчество"
                value={ this.props.middleName }
                onChangeText={ this.props.changeMiddleName }
              />
              <LabelInput
                label="Номер билета"
                maxLength={ 8 }
                keyboardType="numeric"
                value={ this.props.studentId }
                onChangeText={ this.props.changeStudentId }
              />
              <View style={ styles.twoItemsContainer }>
                <LabelPicker
                  style={ styles.twoItemsContainerItem }
                  label="Факультет"
                  pickerItems={ this.props.faculties }
                  selectedValue={ this.props.faculty }
                  onValueChange={ this.props.changeFaculty }
                />
                <LabelPicker
                  style={ styles.twoItemsContainerItem }
                  label="Курс"
                  pickerItems={ this.props.courses }
                  selectedValue={ this.props.course }
                  onValueChange={ this.props.changeCourse }
                />
              </View>
              <LabelPicker
                label="Специальность"
                pickerItems={ this.props.specialties }
                selectedValue={ this.props.specialty }
                onValueChange={ this.props.changeSpecialty }
              />
              <MyButton
                containerViewStyle={ styles.button }
                title="Сохранить"
                onPress={ this.props.saveStudentInfoRequest }
              />
            </Fragment> }
        </Screen>
      </Fragment>);
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
  saveStudentInfoRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);

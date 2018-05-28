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
  saveStudentInfo
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
  onChangeCourse: () => void,
  onChangeFaculty: () => void,
  onChangeMiddleName: () => void,
  onChangeName: () => void,
  onChangeSpicialty: () => void,
  onChangeStudentId: () => void,
  onChangeSurname: () => void,
  onSave: () => void
}

// FIXME: add internationalization.
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
                  onChangeText={ this.props.onChangeName }
                />
                <LabelInput
                  label="Фамилия"
                  value={ this.props.surname }
                  containerViewStyle={ styles.twoItemsContainerItem }
                  onChangeText={ this.props.onChangeSurname }
                />
              </View>
              <LabelInput
                label="Отчество"
                value={ this.props.middleName }
                onChangeText={ this.props.onChangeMiddleName }
              />
              <LabelInput
                label="Номер билета"
                maxLength={ 8 }
                keyboardType="numeric"
                value={ this.props.studentId }
                onChangeText={ this.props.onChangeStudentId }
              />
              <View style={ styles.twoItemsContainer }>
                <LabelPicker
                  style={ styles.twoItemsContainerItem }
                  label="Факультет"
                  pickerItems={ this.props.faculties }
                  selectedValue={ this.props.faculty }
                  onValueChange={ this.props.onChangeFaculty }
                />
                <LabelPicker
                  style={ styles.twoItemsContainerItem }
                  label="Курс"
                  pickerItems={ this.props.courses }
                  selectedValue={ this.props.course }
                  onValueChange={ this.props.onChangeCourse }
                />
              </View>
              <LabelPicker
                label="Специальность"
                pickerItems={ this.props.specialties }
                selectedValue={ this.props.specialty }
                onValueChange={ this.props.onChangeSpicialty }
              />
              <MyButton
                containerViewStyle={ styles.button }
                title="Сохранить"
                onPress={ this.props.onSave }
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
  onChangeCourse: changeCourse,
  onChangeFaculty: changeFaculty,
  onChangeMiddleName: changeMiddleName,
  onChangeName: changeName,
  onChangeSpicialty: changeSpecialty,
  onChangeStudentId: changeStudentId,
  onChangeSurname: changeSurname,
  onSave: saveStudentInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);

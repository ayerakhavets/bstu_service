// @flow
import React, { Component, Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  LabelInput,
  LabelPicker,
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

// eslint-disable-next-line react/prefer-stateless-function
class StudentInfo extends Component<StudentInfoProps> {
  render() {
    return (
      <Fragment>
        <Header title="Пользователь" />

        <ScrollView style={ styles.container }>
          <View style={ styles.firstSecondNameContainer }>
            <LabelInput
              label="Имя"
              value={ this.props.name }
              style={ styles.firstSecondNameInput }
              onChangeText={ this.props.onChangeName }
            />
            <LabelInput
              label="Фамилия"
              value={ this.props.surname }
              style={ styles.firstSecondNameInput }
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
            value={ this.props.studentId }
            onChangeText={ this.props.onChangeStudentId }
          />
          <LabelPicker
            label="Факультет"
            pickerItems={ this.props.faculties }
            selectedValue={ this.props.faculty }
            onValueChange={ this.props.onChangeFaculty }
          />
          <LabelPicker
            label="Курс"
            pickerItems={ this.props.courses }
            selectedValue={ this.props.course }
            onValueChange={ this.props.onChangeCourse }
          />
          <LabelPicker
            label="Специальность"
            pickerItems={ this.props.specialties }
            selectedValue={ this.props.specialty }
            onValueChange={ this.props.onChangeSpicialty }
          />
          <Button
            title="Сохранить"
            style={ styles.button }
            onPress={ this.props.onSave }
          />
        </ScrollView>
      </Fragment>);
  }
}

const mapStateToProps = state => ({
  course: selectCourse(state),
  courses: selectMappedCourses(state),
  faculty: selectFaculty(state),
  faculties: selectMappedFaculties(state),
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

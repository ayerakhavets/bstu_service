// @flow
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, LabelInput, LabelPicker, type PickerItem } from '../../../Components';
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

type StudentInfoProps = {
  course: string,
faculty: string,
  mappedCourses: PickerItem[],
  mappedFaculties: PickerItem[],
  mappedSpecialties: PickerItem[],
  middleName: string,
  name: string,
  specialty: string,
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
    const {
      course,
      faculty,
      mappedCourses,
      mappedFaculties,
      mappedSpecialties,
      middleName,
      name,
      specialty,
      studentId,
      surname,
      onChangeCourse,
      onChangeFaculty,
      onChangeMiddleName,
      onChangeName,
      onChangeSpicialty,
      onChangeStudentId,
      onChangeSurname,
      onSave
    } = this.props;

    return (<ScrollView>
      <LabelInput
        label="Имя"
        value={ name }
        onChangeText={ onChangeName }
      />
      <LabelInput
        label="Фамилия"
        value={ surname }
        onChangeText={ onChangeSurname }
      />
      <LabelInput
        label="Отчество"
        value={ middleName }
        onChangeText={ onChangeMiddleName }
      />
      <LabelInput
        label="Номер билета"
        value={ studentId }
        onChangeText={ onChangeStudentId }
      />
      <LabelPicker
        label="Факультет"
        pickerItems={ mappedFaculties }
        selectedValue={ faculty }
        onValueChange={ onChangeFaculty }
      />
      <LabelPicker
        label="Курс"
        pickerItems={ mappedCourses }
        selectedValue={ course }
        onValueChange={ onChangeCourse }
      />
      <LabelPicker
        label="Специальность"
        pickerItems={ mappedSpecialties }
        selectedValue={ specialty }
        onValueChange={ onChangeSpicialty }
      />
      <Button
        title="Сохранить"
        onPress={ onSave }
      />
    </ScrollView>);
  }
}

const mapStateToProps = state => ({
  course: selectCourse(state),
  faculty: selectFaculty(state),
  mappedCourses: selectMappedCourses(state),
  mappedFaculties: selectMappedFaculties(state),
  mappedSpecialties: selectMappedSpecialties(state),
  middleName: selectMiddleName(state),
  name: selectName(state),
  specialty: selectSpecialty(state),
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

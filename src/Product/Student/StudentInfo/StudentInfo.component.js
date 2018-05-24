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
    return (<ScrollView>
      <LabelInput
        label="Имя"
        value={ this.props.name }
        onChangeText={ this.props.onChangeName }
      />
      <LabelInput
        label="Фамилия"
        value={ this.props.surname }
        onChangeText={ this.props.onChangeSurname }
      />
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
        pickerItems={ this.props.mappedFaculties }
        selectedValue={ this.props.faculty }
        onValueChange={ this.props.onChangeFaculty }
      />
      <LabelPicker
        label="Курс"
        pickerItems={ this.props.mappedCourses }
        selectedValue={ this.props.course }
        onValueChange={ this.props.onChangeCourse }
      />
      <LabelPicker
        label="Специальность"
        pickerItems={ this.props.mappedSpecialties }
        selectedValue={ this.props.specialty }
        onValueChange={ this.props.onChangeSpicialty }
      />
      <Button
        title="Сохранить"
        onPress={ this.props.onSave }
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

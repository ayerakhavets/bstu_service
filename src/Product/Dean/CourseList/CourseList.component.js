// @flow
import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { I18n } from '@my/framework';
import { colors, HeaderRight } from '@my/components';
import { openStudentList, type NavigationParams } from './CourseList.actions';
import styles from './CourseList.styles';

// TODO: use server data instead of the mocked one.
const specialties1 = [];
const specialties2 = [I18n.translate('courseList.design'), I18n.translate('courseList.mobile')];
const specialties3 = [
  I18n.translate('courseList.design'), I18n.translate('courseList.mobile'),
  I18n.translate('courseList.system'), I18n.translate('courseList.software')];
const specialties4 = [
  I18n.translate('courseList.design'), I18n.translate('courseList.mobile'),
  I18n.translate('courseList.system'), I18n.translate('courseList.software')];
const sections = [
  { title: '1', data: specialties1 },
  { title: '2', data: specialties2 },
  { title: '3', data: specialties3 },
  { title: '4', data: specialties4 }
];

type CourseListProps = {
  onOpenStudentList: (navigationParams: NavigationParams) => void,
}

class CourseList extends React.Component<CourseListProps> {
  static navigationOptions = () => ({
    headerRight: <HeaderRight />
  });

  keyExtractor = (item, index) => item + index

  renderItem = ({ item, section }) => (<ListItem
    chevronColor={ colors.greenDark }
    title={ item }
    // eslint-disable-next-line react/jsx-no-bind
    onPress={ () => this.props.onOpenStudentList({
      course: section.title,
      specialty: item
    }) }
  />)

  renderSectionHeader = ({ section: { title } }) => (
    <View style={ styles.headerView }>
      <Text style={ styles.headerText }>
        { I18n.translate('courseList.course', { title }) }
      </Text>
    </View>
  )

  render() {
    return (
      <SectionList
        keyExtractor={ this.keyExtractor }
        stickySectionHeadersEnabled
        renderItem={ this.renderItem }
        renderSectionHeader={ this.renderSectionHeader }
        sections={ sections }
      />
    );
  }
}

const mapDispatchToProps = {
  onOpenStudentList: openStudentList
};

export default connect(null, mapDispatchToProps)(CourseList);

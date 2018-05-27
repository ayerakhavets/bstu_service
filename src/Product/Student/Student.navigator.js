// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckListStack from './CheckList';
import StudentInfo from './StudentInfo';
import { colors, styles } from '../../Components';

// TODO: add internationalization.
const checkList = 'Выплаты';
const studentInfo = 'Пользователь';

const StudentTabs = createBottomTabNavigator({
  [`${checkList}`]: CheckListStack,
  [`${studentInfo}`]: StudentInfo
},
{
  initialRouteName: studentInfo,
  tabBarOptions: {
    activeTintColor: colors.greenDark
  },
  navigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/display-name, react/prop-types
    tabBarIcon: ({ focused }) => {
      let iconName;
      switch (navigation.state.routeName) {
      case checkList:
        iconName = `ios-list-box${focused ? '' : '-outline'}`; break;
      case studentInfo:
        iconName = `ios-contact${focused ? '' : '-outline'}`; break;
      default: break;
      }
      return (<Icon
        name={ iconName }
        size={ styles.tabIconSize }
        color={ focused ? colors.greenDark : colors.grey }
      />);
    }
  })
});

export default StudentTabs;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'DOUBLE tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

// checkList: {
//   screen: CheckList,
//   navigationOptions: () => ({
//     tabBarIcon: ({ tintColor }) => (
//       <Icon
//         name="bookmark"
//         color={ tintColor }
//         size={ 24 }
//       />
//     )
//   })
// },

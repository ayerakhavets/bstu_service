// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontaBarChartWithYAxis from './charts.component';
import SomeChart from './chart2.component';
import { colors, styles } from '../../../Components';

export const CHART_ONE = 'График';
export const CHART_TWO = 'График2';

export default createBottomTabNavigator({
  [CHART_ONE]: HorizontaBarChartWithYAxis,
  [CHART_TWO]: SomeChart
},
{
  initialRouteName: CHART_ONE,
  navigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/display-name, react/prop-types
    tabBarIcon: ({ focused }) => {
      let iconName;
      switch (navigation.state.routeName) {
      case CHART_ONE:
        iconName = 'chart-bar'; break;
      case CHART_TWO:
        iconName = 'chart-arc'; break;
      default: break;
      }
      return (<Icon
        color={ focused ? colors.greenDark : colors.grey }
        name={ iconName }
        size={ styles.tabIconSize }
      />);
    }
  }),
  tabBarOptions: {
    showLabel: false
  }
});

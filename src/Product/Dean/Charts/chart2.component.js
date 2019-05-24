import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

// eslint-disable-next-line
class PieChartWithCenteredLabels extends PureComponent<null> {
  render() {
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2 // optional, default 3
    };
    const screenWidth = Dimensions.get('window').width;
    const data = [
      { name: '4*',
        population: 215,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15 },
      { name: '3*', population: 280, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: '2*',
        population: 527,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15 },
      { name: '1*', population: 1190, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ];

    return (
      <PieChart
        data={ data }
        width={ screenWidth }
        height={ 220 }
        chartConfig={ chartConfig }
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    );
  }
}

export default PieChartWithCenteredLabels;

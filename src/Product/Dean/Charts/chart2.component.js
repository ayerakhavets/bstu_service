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
      { name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15 },
      { name: 'Общежитие', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Академическая задолженность',
        population: 527612,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15 },
      { name: 'Пеня', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Счастье', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
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

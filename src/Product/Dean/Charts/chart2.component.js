import React from 'react';

import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

// eslint-disable-next-line
class PieChartWithCenteredLabels extends React.PureComponent {

  render() {
    const randomColor = () => (`#${(Math.random() * 0xFFFFFF << 0).toString(16)}000000`).slice(0, 7);
    const data = [
      {
        key: 2,
        amount: 20,
        svg: { fill: 'grey' }
      },
      {
        key: 3,
        amount: 35,
        svg: { fill: 'black' }
      },
      {
        key: 4,
        amount: 35,
        svg: { fill: 'brown' }
      },
      {
        key: 5,
        amount: 10,
        svg: { fill: randomColor() }
      }
    ];

    const Labels = ({ slices, height, width }) => slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={ index }
          x={ pieCentroid[0] }
          y={ pieCentroid[1] }
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={ 24 }
          stroke="black"
          strokeWidth={ 0.2 }
        >
          {data.amount}
        </Text>
      );
    });

    return (
      <PieChart
        style={{ height: 370, paddingTop: 100 }}
        valueAccessor={ ({ item }) => item.amount }
        data={ data }
        spacing={ 0 }
        outerRadius="95%"
      >
        <Labels />
      </PieChart>
    );
  }
}

export default PieChartWithCenteredLabels;

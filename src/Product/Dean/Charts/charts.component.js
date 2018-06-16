import React from 'react';
import { BarChart, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import * as scale from 'd3-scale';

// eslint-disable-next-line
class XAxisExample extends React.PureComponent {

  render() {
    const data = [14, 80, 100, 55];

    return (
      <View style={{ height: 370, padding: 20, paddingTop: 100 }}>
        <BarChart
          style={{ flex: 1 }}
          data={ data }
          gridMin={ 0 }
          svg={{ fill: 'grey' }}
        />
        <XAxis
          style={{ marginTop: 10, margingHorizontal: 10 }}
          data={ data }
          formatLabel={ (value, index) => `${index + 1} курс` }
          labelStyle={{ color: 'black' }}
        />
      </View>
    );
  }
}

export default XAxisExample;

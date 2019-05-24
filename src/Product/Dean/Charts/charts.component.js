// @flow
import React, { PureComponent } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

// eslint-disable-next-line
class XAxisExample extends PureComponent<null> {
  render() {
    const style = {
      marginVertical: 8,
      borderRadius: 16
    };

    return (
      <View>
        <Text>
          Active payment period chart
        </Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={ Dimensions.get('window').width }
          height={ 220 }
          // yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={ style }
        />
      </View>
    );
  }
}

export default XAxisExample;

import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};
const chartConfig = {
  backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "black",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "black",
};

export default class LineChartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>折線グラフ</Text>
        <LineChart
          data={data}
          width={windowWidth * 0.99}
          height={windowHeight / 4}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
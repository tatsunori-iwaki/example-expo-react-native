import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PieChart } from "react-native-chart-kit";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const data = [
  {
    name: "Seoul",
    population: 60,
    color: "hsla(0, 0%, 0%, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 40,
    color: "hsla(0, 0%, 20%, 0.8)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 33,
    color: "hsla(0, 0%, 40%, 0.6)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 21,
    color: "hsla(0, 0%, 60%, 0.4)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 9,
    color: "hsla(0, 0%, 80%, 0.2)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  }
];
const chartConfig = {
  backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "black",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "black",
};

export default class PieChartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>円グラフ</Text>
        <PieChart
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
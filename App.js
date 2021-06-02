import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/DetailsScreen";
import PieChartScreen from "./screen/PieChartScreen";
import LineChartScreen from "./screen/LineChartScreen";
import BarChartScreen from "./screen/BarChartScreen";
import TreeJsCubeScreen from "./screen/TreeJsCubeScreen";

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      PieChart: PieChartScreen,
      LineChart: LineChartScreen,
      BarChart: BarChartScreen,
      TreeJsCube: TreeJsCubeScreen,
    },
    {
      initialRouteName: 'Home',
    }
  )
);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

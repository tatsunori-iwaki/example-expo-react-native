import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/DetailsScreen";
import PieChartScreen from "./screen/PieChartScreen";

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      PieChart: PieChartScreen,
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

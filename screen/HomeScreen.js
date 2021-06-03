import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <View style={styles.buttonLayout}>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
        <View style={styles.buttonLayout}>
          <Button
            title="Go to PieChart"
            onPress={() => this.props.navigation.navigate('PieChart')}
          />
        </View>
        <View style={styles.buttonLayout}>
          <Button
            title="Go to LineChart"
            onPress={() => this.props.navigation.navigate('LineChart')}
          />
        </View>
        <View style={styles.buttonLayout}>
          <Button
            title="Go to BarChartScreen"
            onPress={() => this.props.navigation.navigate('BarChart')}
          />
        </View>
        <View style={styles.buttonLayout}>
          <Button
            title="Go to TreeJsCubeScreen"
            onPress={() => this.props.navigation.navigate('TreeJsCube')}
          />
        </View>
        <View style={styles.buttonLayout}>
          <Button
            title="Go to OrbitControlScreen"
            onPress={() => this.props.navigation.navigate('OrbitControl')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLayout: {
    marginBottom: 10
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to PieChart"
          onPress={() => this.props.navigation.navigate('PieChart')}
        />
        <Button
          title="Go to LineChart"
          onPress={() => this.props.navigation.navigate('LineChart')}
        />
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
});

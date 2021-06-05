import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList } from 'react-native';

const DATA = [
  {
    id: 'Details',
    title: 'sandbox',
  },
  {
    id: 'PieChart',
    title: 'PieChart',
  },
  {
    id: 'LineChart',
    title: 'LineChart',
  },
  {
    id: 'BarChart',
    title: 'BarChart',
  },
  {
    id: 'TreeJsCube',
    title: 'TreeJsCube',
  },
  {
    id: 'OrbitControl',
    title: 'OrbitControl',
  },
  {
    id: 'WebView',
    title: 'WebView',
  },
];
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text>Hello, Open up App.js to start working on your app!</Text>
        </View>
        <ScrollView>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.buttonLayout}>
                <Button
                  title={item.title}
                  onPress={() => this.props.navigation.navigate(item.id)}
                />
              </View>
            )}
          />
        </ScrollView>
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

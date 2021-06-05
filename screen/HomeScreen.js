import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, Dimensions, Image } from 'react-native';

const ITEM_WIDTH = Dimensions.get('window').width;
const DATA = [
  { id: 'Details', title: 'sandbox', thumbnail: require('../public/thumbnail/details.png'), },
  { id: 'WebView', title: 'WebView', thumbnail: require('../public/thumbnail/webView.png'), },
  { id: 'TreeJsCube', title: 'TreeJsCube', thumbnail: require('../public/thumbnail/treeJsCube.png'), },
  { id: 'OrbitControl', title: 'OrbitControl', thumbnail: require('../public/thumbnail/orbitControl.png'), },
  { id: 'PieChart', title: 'PieChart', thumbnail: require('../public/thumbnail/pieChart.png'), },
  { id: 'LineChart', title: 'LineChart', thumbnail: require('../public/thumbnail/lineChart.png'), },
  { id: 'BarChart', title: 'BarChart', thumbnail: require('../public/thumbnail/barChart.png'), },
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
            numColumns={3}
            renderItem={({ item }) => (
              <View style={styles.buttonLayout}>
                <Image
                  source={item.thumbnail}
                  style={styles.imageStyle}
                />
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
  },
  imageStyle: {
    width: ITEM_WIDTH / 3,
    height: ITEM_WIDTH / 3,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: "#333"
  }
});

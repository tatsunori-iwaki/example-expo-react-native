import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, Dimensions, Image } from 'react-native';
import thumbnailDetails from '../public/thumbnail/details.png'
import thumbnailWebView from '../public/thumbnail/webView.png'
import thumbnailTreeJsCube from '../public/thumbnail/treeJsCube.png'
import thumbnailOrbitControl from '../public/thumbnail/orbitControl.png'
import thumbnailPieChart from '../public/thumbnail/pieChart.png'
import thumbnailLineChart from '../public/thumbnail/lineChart.png'
import thumbnailBarChart from '../public/thumbnail/barChart.png'

const ITEM_WIDTH = Dimensions.get('window').width;
const DATA = [
  { id: 'Details', title: 'sandbox', thumbnail: thumbnailDetails, },
  { id: 'WebView', title: 'WebView', thumbnail: thumbnailWebView, },
  { id: 'TreeJsCube', title: 'TreeJsCube', thumbnail: thumbnailTreeJsCube, },
  { id: 'OrbitControl', title: 'OrbitControl', thumbnail: thumbnailOrbitControl, },
  { id: 'PieChart', title: 'PieChart', thumbnail: thumbnailPieChart, },
  { id: 'LineChart', title: 'LineChart', thumbnail: thumbnailLineChart, },
  { id: 'BarChart', title: 'BarChart', thumbnail: thumbnailBarChart, },
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

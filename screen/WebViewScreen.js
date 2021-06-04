import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewScreen extends React.Component {
  render() {
    return (
      Platform.OS === 'web' ? <iframe src='https://threejs.org/' height='100%' width='100%' /> : <View style={styles.container}><WebView originWhitelist={['*']}
        source={{ uri: 'https://threejs.org/', baseUrl: '' }}
        style={{ marginTop: 20 }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

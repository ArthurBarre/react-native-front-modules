//not ok
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
class WebViewExample extends React.Component {
  render(h) {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <WebView
          source={{
            uri:
              'https://www.youtube.com/watch?v=Gu4rJFIiA6U'
          }}
        ></WebView>
      </View>
    )
  }
}
export default WebViewExample;

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: '#121212'
  },
  container: {
    height: 750,
  }
})
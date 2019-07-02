import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './components/PresentationalComponent'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.redbox}></View>
        <View style={styles.bluebox}></View>
        <View style={styles.orangebox}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 900
  },
  redbox: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 200,
    height: 200,
    backgroundColor: 'steelblue'
  },
  orangebox: {
    width: 200,
    height: 200,
    backgroundColor: 'orange'
  }
})
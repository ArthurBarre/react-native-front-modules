import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'


class FlexBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redbox}></View>
        <View style={styles.bluebox}></View>
        <View style={styles.orangebox}></View>
      </View>
    )
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
export default FlexBox;

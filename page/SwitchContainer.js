import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchExample from '../components/SwitchExample';

class SwitchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false
    }
  }
  toggleSwitch1 = (value) => {
    this.setState({ switch1Value: value })
    console.log('Switch 1 is ' + value)
  }
  render() {
    return (
      <View>
        <SwitchExample
          toggleSwitch1={this.toggleSwitch1}
          switch1Value={this.state.switch1Value} />
      </View>
    )
  }
}
export default SwitchContainer;
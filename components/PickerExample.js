import React from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

class PickerExample extends React.Component {
  state = {
    user: ''
  }
  updateUser = (user) => {
    this.setState({ user: user })
  }
  render() {
    return (
      <View>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Steve" value="steve" />
          <Picker.Item label="Stave" value="Stave" />
          <Picker.Item label="Stuve" value="stuve" />
          <Picker.Item label="Stive" value="stive" />
          <Picker.Item label="Stove" value="stove" />
          <Picker.Item label="Styve" value="styve" />
        </Picker>
        <Text style={styles.text}>{this.state.user}</Text>
      </View>
    )
  }
}
export default PickerExample;
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  }
})

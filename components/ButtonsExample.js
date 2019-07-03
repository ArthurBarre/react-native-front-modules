import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

class Buttons extends React.Component {
  render() {
    const handlePress = () => {
      alert('THIS IS AN ALERT')
    }
    return (
      <View>
        <TouchableOpacity
          onPress={handlePress}
        >
          <Text style={styles.text}>
            Button
          </Text>
        </TouchableOpacity>
        <View
          style={styles.container}
        >
          <Button
            onPress={handlePress}
            title="Button"
            color="red"
          />
        </View>
        <TouchableHighlight
          onPress={handlePress}
        >
          <Text style={styles.text}>
            Button
          </Text>
        </TouchableHighlight>
        <View
          style={styles.container}
        ></View>
        <TouchableNativeFeedback
          onPress={handlePress}
        >
          <Text style={styles.text}>
            Button
          </Text>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={handlePress}
        >
          <Text style={styles.text}>
            Button
          </Text>
        </TouchableWithoutFeedback>
      </View >
    )
  }
}
export default Buttons;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
  }
})
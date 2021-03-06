import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class ListExample extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'Benibla'
      },
      {
        id: 1,
        name: 'Benibly'
      },
      {
        id: 2,
        name: 'Benibli'
      },
      {
        id: 3,
        name: 'Beniblo'
      },
    ]
  }
  alertItemName = (item) => {
    alert(item.name)
  }
  render() {
    return (
      <View
        style={styles.body}
      >
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}>
              <Text
                style={styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}
export default ListExample;

const styles = StyleSheet.create({
  body: {
    marginTop: 100
  },
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center'
  },
  text: {
    color: '#4f603c'
  }
})
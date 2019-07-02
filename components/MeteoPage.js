'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

class MeteoPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.description}>
          Recherchez la météo de votre ville
        </Text>
        <View style={styles.flowRight}>
          <TextInput style={styles.searchInput} placeholder="Entrez la ville désirée...">
          </TextInput>
          <TouchableHighlight style={style.button} underlayColor='#99D9F4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    color: '#656565',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20
  },
  flowRight: {
    alignItems: 'center',
    alignSelf: 'strech'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 16,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'strech',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

module.exports = MeteoPage
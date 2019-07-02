import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './components/PresentationalComponent'

export default class App extends React.Component {
  state = {
    myState: 'consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusconsectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing eli, used do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eius'
  }
  updateState = () => {
    this.setState({ myState: 'The state is updated' })
  }
  render() {
    return (
      <View>
        <PresentationalComponent myState={this.state.myState} updateState={this.updateState} />
      </View>
    );
  }
}
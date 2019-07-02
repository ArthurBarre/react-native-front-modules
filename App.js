import React from 'react';
import { Text, View } from 'react-native';
import ComponentExample from './components/ComponentExample'
import FlexBoxExample from './components/FlexBoxExample'
import ListExample from './components/ListExample';
import InputsExample from './components/InputsExample';
import ScrollViewExample from './components/ScrollViewExample';
import ImageExample from './components/ImageExample';
import HttpExample from './components/HttpExample'
class App extends React.Component {
  render() {
    return (
      <View>
        <HttpExample />
      </View>
    );
  }
}
export default App;
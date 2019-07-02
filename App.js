import React from 'react';
import { Text, View } from 'react-native';
import ComponentExample from './components/ComponentExample'
import FlexBoxExample from './components/FlexBoxExample'
import ListExample from './components/ListExample';
import InputsExample from './components/InputsExample';
import ScrollViewExample from './components/ScrollViewExample';
import ImageExample from './components/ImageExample';
import HttpExample from './components/HttpExample';
import ButtonsExample from './components/ButtonsExample';
class App extends React.Component {
  render() {
    return (
      <View>
        <ButtonsExample />
      </View>
    );
  }
}
export default App;
import React from 'react';
import { Text, View } from 'react-native';
import ComponentExample from './components/ComponentExample'
import FlexBoxExample from './components/FlexBoxExample'
import ListExample from './components/ListExample';
import InputsExample from './components/InputsExample';
import ScrollViewExample from './components/ScrollViewExample';
import ImageExample from './components/ImageExample'
class App extends React.Component {
  render() {
    return (
      <View>
        <FlexBoxExample />
      </View>
    );
  }
}
export default App;
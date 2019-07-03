import React from 'react';
import { StatusBar, View } from 'react-native';
import ComponentExample from './components/ComponentExample'
import FlexBoxExample from './components/FlexBoxExample'
import ListExample from './components/ListExample';
import InputsExample from './components/InputsExample';
import ScrollViewExample from './components/ScrollViewExample';
import ImageExample from './components/ImageExample';
import HttpExample from './components/HttpExample';
import ButtonsExample from './components/ButtonsExample';
import AnimationExample from './components/AnimationsExample';
import Routes from './Routes'
import WebViewExample from './components/WebViewExample';
import ModalExample from './components/ModalExample';
import ActivityIndicatorExample from './components/ActivityIndicatorExample';
import PickerExample from './components/PickerExample';
import SwitchContainer from './page/SwitchContainer';

class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
        <SwitchContainer />
      </View>

    );
  }
}
export default App;

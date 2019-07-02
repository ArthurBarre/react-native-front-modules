import React from 'react';
import { Text, View } from 'react-native';
//import PresentationalComponent from './components/PresentationalComponent'
//import FlexBox from './components/FlexBox'
import List from './components/List';
import Inputs from './components/Inputs';
import ScrollViews from './components/ScrollViews';
class App extends React.Component {
  render() {
    return (
      <View>
        <ScrollViews></ScrollViews>
      </View>
    );
  }
}
export default App;
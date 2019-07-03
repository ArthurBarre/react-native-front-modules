import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './page/Home';
import About from './page/About';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" intitial="true" />
          <Scene key="about" component={About} title="About" />
        </Scene>
      </Router>
    )
  }
}
export default Routes;
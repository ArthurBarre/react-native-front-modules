import React from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ActivityIndicatorExample extends React.Component {
  state = { animating: true }
  closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false
  }), 6000)

  componentDidMount = () => this.closeActivityIndicator()
  render() {
    const animating = this.state.animating
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="#FF5C5C"
          size="large"
          style={styles.ActivityIndicator}
        />
      </View>
    )
  }
}
export default ActivityIndicatorExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})
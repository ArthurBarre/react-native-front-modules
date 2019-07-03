import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const About = () => {
  const goToHome = () => {
    Actions.Home()
  }
  return (
    <View>
      <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
        <Text>Let's go to HomePage</Text>
      </TouchableOpacity>
    </View>
  )
}
export default About
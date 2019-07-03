import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  const goToAbout = () => {
    Actions.about()
  }
  return (
    <View>
      <TouchableOpacity style={{ margin: 128 }} onPress={goToAbout}>
        <Text>Let's go to About Page</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Home
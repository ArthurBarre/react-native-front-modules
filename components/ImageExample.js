import React from 'react';
import { Image, View } from 'react-native';

class ImageExample extends React.Component {
  render() {
    return (
      <Image
        style={{ width: 300, height: 500 }}
        source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
      />
    )
  }
}
export default ImageExample;
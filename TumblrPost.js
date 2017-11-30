//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class TumblrPost extends Component {
  render() {
    const img = { uri: this.props.post.item.photos[0].original_size.url };
    const {width, height} = { uri: this.props.post.item.photos[0].original_size };

    console.log('image url:', img);
        
    return (
      <View style={styles.container}>
        <Image style={{width, height}} source={img} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TumblrPost;

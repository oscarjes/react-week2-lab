//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';


// create a component
class TumblrPost extends Component {
  render() {
    const img = { uri: this.props.photos[0].alt_sizes[2].url };
    const {width, height} = this.props.photos[0].alt_sizes[2];

    return (
      <TouchableHighlight onPress={this.props.loadProfile}>
        <View style={styles.container}>
          <Image style={{height: 366, width: 250, marginBottom: 50}} source={img} />
        </View>
      </TouchableHighlight>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default TumblrPost;

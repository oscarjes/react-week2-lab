import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import testData from './TEST_DATA.json';
import TumblrList from './TumblrList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      posts: testData.response.posts
    }
      
  }

  render() {
    return (
      <View style={styles.container}>
        <TumblrList posts={this.state.posts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

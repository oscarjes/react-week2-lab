//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import TumblrPost from './TumblrPost';

// create a component
class TumblrList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.posts}
          refreshing={this.props.loading}
          onRefresh={this.props.loadMore}
          onEndReachedThreshold={0.05}
          onEndReached={this.props.loadMore}
          keyExtractor={(post) => post.id}
          ListFooterComponent={() =>
            <View style={{backgroundColor: '#ffffff'}}>
              <ActivityIndicator size="large" />
            </View>
          }
          renderItem={(postItem) => {
              return <TumblrPost post = {postItem}
              />
          }}
        />
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
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default TumblrList;

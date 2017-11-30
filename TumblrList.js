//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import TumblrPost from './TumblrPost';

// create a component
class TumblrList extends Component {
  render() {

    const props = this.props.screenProps;
    const { navigate } = this.props.navigation;
    console.log(props.posts)
    return (
      <View style={styles.container}>
        <FlatList
          data={props.posts}
          refreshing={props.loading}
          onRefresh={props.loadMore}
          onEndReachedThreshold={0.05}
          onEndReached={props.loadMore}
          keyExtractor={(post) => post.id}
          ListFooterComponent={() =>
            <View style={{backgroundColor: '#ffffff'}}>
              <ActivityIndicator size="large" />
            </View>
          }
          renderItem={(postItem) => {
              return <TumblrPost {...postItem.item} loadProfile={() => navigate('TumblrProfile', postItem.item)} />
              
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

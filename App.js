import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import testData from './TEST_DATA.json';
import TumblrList from './TumblrList';

const api_key = "ty4XIgHVw2xYH8EiUrVjbYIaXqMlzXdz9cdc3H4sKp52Kk6fAv";
const api_url = "https://api.tumblr.com/v2/blog/rickandmortythings/posts/photo";

export default class App extends React.Component {

  componentWillMount (){
    this.setState ({
      loading : true
    }, 
    () => {this.fetchWithPage(0)})
  }

  fetchWithPage(page){
    fetch(`${api_url}?api_key=${api_key}&limit=4&offset=${page * 4}`)
    .then ((data) => data.json())
    .then ((json) => {
      return new Promise(function(resolve, reject){
        setTimeout(function() {
          resolve(json)
        }, 2000)
      })
    })
    .then ((json) => {
      this.setState({
        posts : json.response.posts,
        loading : false
      })
    })
      
    }

  constructor(props) {
    super(props);
  
    this.state = {
      posts: [],
      loading : false,
    }
    this.fetchWithPage = this.fetchWithPage.bind(this);
      
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

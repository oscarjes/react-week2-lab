import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import testData from './TEST_DATA.json';
import TumblrList from './TumblrList';
import TumblrProfile from './TumblrProfile';
import {StackNavigator} from 'react-navigation';

const Routes = StackNavigator({
  TumblrList: { screen: TumblrList},
  TumblrProfile: {screen: TumblrProfile}
},
{
  initialRouteName: 'TumblrList'
}
)

const api_key = "ty4XIgHVw2xYH8EiUrVjbYIaXqMlzXdz9cdc3H4sKp52Kk6fAv";
const api_url = "https://api.tumblr.com/v2/blog/rickandmortythings/posts/photo";

export default class App extends React.Component {

  componentWillMount (){
    this.setState ({
      loading : true
    }, 
    () => {this.fetchWithPage(0)})
  }

  loadMore() {
    const newPage = this.state.page + 1;
    this.setState({
      page: newPage
    }, () => {
      this.fetchWithPage(newPage);
    });
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
        posts : this.state.posts.concat(json.response.posts),
        loading : false
      })
    })
      
    }

  constructor(props) {
    super(props);
  
    this.state = {
      posts: [],
      loading : false,
      page: 0
    }
    this.fetchWithPage = this.fetchWithPage.bind(this);

    this.loadMore = this.loadMore.bind(this);
      
  }

  render() {
    return (
        <Routes
        screenProps={{
          posts: this.state.posts,
          loadmore: this.loadMore,
          loading: this.state.loading
        }} />
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



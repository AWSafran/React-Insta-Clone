import React, { Component } from 'react';
import './App.css';
import PostsPage from './PostsPage/PostsPage';

import dummyData from './Data/dummy-data';


class App extends Component {
  constructor(){
    super();

    this.state = {
      pageContent: [],
      searchContent: ''
    }
  }

  componentDidMount(){
    this.setState({pageContent: dummyData})
  }

  searchChange = e =>{
    console.log("typing in search bar");
    this.setState({
      searchContent: e.target.value
    })
  }

  submitSearch = e =>{
    e.preventDefault();
    if(this.state.searchContent !== ''){
      const searched = this.state.pageContent.filter(item => item.username.includes(this.state.searchContent));
      this.setState({pageContent: searched});
    }
    else{
      console.log('Searching for nothing!');
      this.setState({pageContent: dummyData});
    }
  }

  render() {
    return (
      <PostsPage
        searchChange={this.searchChange}
        search={this.state.searchContent}
        searchSubmit={this.submitSearch}
        posts={this.state.pageContent}
      />
    );
  }
}

export default App;

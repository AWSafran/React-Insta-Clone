import React, { Component } from 'react';
import './App.css';

import dummyData from './Data/dummy-data';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pageContent: []
    }
  }

  componentDidMount(){
    this.setState({pageContent: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.pageContent} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
      
    };
  }

  componentDidMount() {
    console.log("CDM is running");
    
    this.setState({posts: dummyData});
        
  }


  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  searchPosts = e => {
    e.preventDefault();
    console.log("searching");
    this.setState({
      posts: [
        ...dummyData.filter((item) => {
          return item.username === this.state.search
        })
      ]
   
 })
}  


  render() {
    console.log("rendering");
    return (
      <div className="App">
         <SearchBar
            search={this.searchPosts}
            onChange={this.handleChanges}
         />
         <PostContainer 
            posts={this.state.posts}
          />
      </div>
    );
  }
}

export default App;

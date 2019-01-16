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



  postLiked = index => {
    console.log("Liked!");
    this.setState(prevState => ({ likes: prevState.likes + 1}))

  };
  


  render() {
    console.log("rendering");
    return (
      <div className="App">
         <SearchBar />
         <PostContainer 
            posts={this.state.posts}
          />
      </div>
    );
  }
}

export default App;

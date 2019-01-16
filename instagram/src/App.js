import React, { Component } from 'react';
import PostsPage from "./components/PostContainer/PostsPage";
// import PostContainer from "./components/PostContainer/PostContainer";
// import SearchBar from "./components/SearchBar/SearchBar";
// import dummyData from "./dummy-data";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     
      
    };
  }




  render() {
    console.log("rendering");
    return (
      <div className="App">
         
         <PostsPage />
         
      </div>
    );
  }
}

export default App;

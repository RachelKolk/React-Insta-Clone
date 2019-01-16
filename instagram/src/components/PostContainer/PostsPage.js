import React, { Component } from 'react';
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";

class PostsPage extends Component {
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
  
  export default PostsPage;
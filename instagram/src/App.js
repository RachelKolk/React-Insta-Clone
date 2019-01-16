import React, { Component } from 'react';
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
// import PostContainer from "./components/PostContainer/PostContainer";
// import SearchBar from "./components/SearchBar/SearchBar";
// import dummyData from "./dummy-data";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     loggedIn: false
      
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
 }

 hydrateStateWithLocalStorage() {
  // for all items in state
  for (let key in this.state) {
    // if the key exists in localStorage
    if (localStorage.hasOwnProperty(key)) {
      // get the key's value from localStorage
      let value = localStorage.getItem(key);

      // parse the localStorage string and setState
      try {
        value = JSON.parse(value);
        this.setState({ [key]: value });
      } catch (e) {
        // handle empty string
        this.setState({ [key]: value });
      }
    }
  }
}

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
    
  }

  login = () => {
    console.log("logging in");
    this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
    localStorage.setItem("loggedIn", this.state.loggedIn);
  };


  
  
  render() {
    console.log("rendering");
    return (
      <div className="App">
        <Login 
          login={this.login}
          onChange={this.handleChanges}
        />
         <PostsPage />
        

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/Login/LoginPage";


import './App.css';
import authenticate from './components/authentication/authentication';

class App extends Component {
  constructor() {
    console.log("helpo");
    super();
    this.state = {
     loggedIn: false
      
    };
  }

  componentDidMount() {
    console.log("comp mounting");
    this.hydrateStateWithLocalStorage();
 }

 hydrateStateWithLocalStorage() {
   console.log("hydrating");
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



  // handleChanges = e => {
  //   this.setState({ [e.target.name]: e.target.value});
    
  // }

  // login = () => {
  //   console.log("logging in");
  //   this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
  //   localStorage.setItem("loggedIn", this.state.loggedIn);
  // };


  
  
  render() {
    console.log("rendering");
    return (
      <div className="App">
        
        <Authentication loggedIn={this.state.loggedIn} />
        {/* <Login 
          login={this.login}
          onChange={this.handleChanges}
        />
         <PostsPage /> */}
        

      </div>
    );
  }
}

const Authentication = authenticate(LoginPage)(PostsPage);

export default authenticate(App)(LoginPage);

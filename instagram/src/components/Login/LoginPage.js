import React, { Component } from 'react';
import Login from "./Login";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
        
    }
    
      login = () => {
        console.log("logging in");
        this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
        localStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn));
    };

    render() {
        return (
            <div className="loginScreen">
                <Login 
                    login={this.login}
                    onChange={this.handleChanges}
                />
            </div>
        )
    }
}

export default LoginPage;
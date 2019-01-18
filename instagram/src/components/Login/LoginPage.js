import React, { Component } from 'react';
import styled from "styled-components";
import Login from "./Login";

const LoginScreen = styled.div`
    width: 640px%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    
`;

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
        
    }
    
      login = () => {
        console.log("logging in");
        this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
        
        localStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn));
        localStorage.setItem("username", JSON.stringify(this.state.username));
    };

    render() {
        return (
            <LoginScreen>
                <Login 
                    login={this.login}
                    onChange={this.handleChanges}
                />
            </LoginScreen>
        )
    }
}

export default LoginPage;
import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            
                username: props.username
                password: props.password
            
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        value="something"
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={this.handleChanges}
                    />
                </form>

                <form>
                    <input
                        value="something"
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={this.handleChanges}
                    />
                </form>

            </div>
        )
    }
}

export default Login;

import React from "react";
import styled from "styled-components";


const LoginPage = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const LoginForm = styled.form`
    margin: 3%;
    padding: 3%;
`;

const LoginInput = styled.input`
    line-height: 2rem;
    border-radius: 4px;
`;

const LoginButton = styled.button`
    background-color: lightgray;
    padding: 10px 30px
    border-radius: 4px;
    margin: 3%;

    &:hover {
    padding: 11px 31px;
    }
`;


    function Login(props) {
        return (
            <LoginPage>
                <LoginForm id="login" onSubmit={props.login}>
                    <LoginInput
                        
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={props.onChange}
                    />
               
                    <LoginInput
                        
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={props.onChange}
                        
                    />
                    <LoginButton>Login</LoginButton>
                </LoginForm>

                

            </LoginPage>
        )
    }
// }

export default Login;

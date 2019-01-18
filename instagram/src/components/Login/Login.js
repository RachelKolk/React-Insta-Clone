import React from "react";
import styled from "styled-components";


const LoginPage = styled.div`
    
`;

const InstaLanding = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
`;

const LoginForm = styled.form`
    text-align: center;
    margin: 3%;
    padding: 3%;
`;

const LoginInput = styled.input`
    line-height: 2rem;
    border-radius: 4px;
    width: 15rem;
`;

const Password = styled(LoginInput)`
    margin-top: 2%;
    margin-bottom: 2%;

`;

const LoginButton = styled.button`
    background-color: lightgray;
    padding: 10px 30px
    border-radius: 4px;
    
    margin-left: auto;
    margin-right: auto;

    &:hover {
    padding: 11px 31px;
    }
`;


    function Login(props) {
        return (
           
            <LoginPage>
                
                <InstaLanding src="/instagram-colored.png" alt="instagram logo"></InstaLanding>
                
                <LoginForm onSubmit={props.login}>
                    <LoginInput
                        
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={props.onChange}
                    />
               
                    <Password
                        
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={props.onChange}
                        
                    />
                    <div>
                    <LoginButton>Login</LoginButton>
                    </div>
                </LoginForm>

                

            </LoginPage>
            
        )
    }
// }

export default Login;

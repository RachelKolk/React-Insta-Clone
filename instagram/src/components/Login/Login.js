import React from "react";


    function Login(props) {
        return (
            <div>
                <form id="login" onSubmit={props.login}>
                    <input
                        
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={props.onChange}
                    />
               
                    <input
                        
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={props.onChange}
                        
                    />
                    <button>Login</button>
                </form>

                

            </div>
        )
    }
// }

export default Login;

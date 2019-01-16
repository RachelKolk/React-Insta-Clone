import React from "react";

const authenticate = App => Login => props => {
 
    if(props.loggedIn) {
        return <App />;
    }
    
    return <Login />;
};

 export default authenticate;
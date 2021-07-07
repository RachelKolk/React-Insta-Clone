import React from "react";

const authenticate = LoginPage => PostsPage => props => {
 
    if(props.loggedIn) {
        return <PostsPage />;
    }
    
    return < LoginPage/>;
};

 export default authenticate;
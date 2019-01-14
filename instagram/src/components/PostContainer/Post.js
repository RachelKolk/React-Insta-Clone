import React from "react";

const Post = props => {
    return (
       <div>
         <img src={props.postOnProps.thumbnailUrl} alt="logo thumbnail"/>
         <h5>{props.postOnProps.username}</h5>
         <img src={props.postOnProps.imageUrl} alt="post" />
         <p>{props.postOnProps.likes}</p>

       </div> 
    )
}

export default Post;
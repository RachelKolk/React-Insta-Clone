import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
    return (
       <div>
         <img src={props.postOnProps.thumbnailUrl} alt="logo thumbnail"/>
         <h4>{props.postOnProps.username}</h4>
         <img src={props.postOnProps.imageUrl} alt="post" />
         <p>{props.postOnProps.likes}</p>
         <CommentSection
            comments={props.postOnProps.comments}
         />
         <h5>{props.postOnProps.timestamp}</h5>
       </div> 
    )
}

export default Post;
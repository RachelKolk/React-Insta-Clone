import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

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

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: ProprTypes.string
            })
        )
        
    })
}

export default Post;
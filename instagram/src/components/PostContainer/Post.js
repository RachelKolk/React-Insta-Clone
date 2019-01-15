import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "../CommentSection/CommentSection.css";

const Post = props => {
    return (
        <div className="PostBox">

            <div className="postHeader">
                <img src={props.postOnProps.thumbnailUrl} alt="logo thumbnail"/>
                <h4>{props.postOnProps.username}</h4>
            </div>

            <img className="postedImage" src={props.postOnProps.imageUrl} alt="post" />

            <div className="PostIcons">
                <div><i className="far fa-heart"></i></div>
                <div><i class="far fa-comment"></i></div>
            </div>

            <h4>{props.postOnProps.likes} likes</h4>
            
            
            <CommentSection
                comments={props.postOnProps.comments}
            />
            <h5>{props.postOnProps.timestamp}</h5>

            <div className="addComment">
                <div className="bold">Add a comment...</div>
                <div><i class="fas fa-ellipsis-h"></i></div>
            </div>

        </div> 
    );
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
                text: PropTypes.string
            })
        )
        
    })
};

export default Post;
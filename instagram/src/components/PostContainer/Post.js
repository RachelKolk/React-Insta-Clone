import React from "react";
import moment from "moment";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "../CommentSection/CommentSection.css";

const Post = props => {
    return (
        <div className="PostBox">

            <div className="postHeader">
                <img className="userLogo" src={props.postOnProps.thumbnailUrl} alt="logo thumbnail"/>
                <h4>{props.postOnProps.username}</h4>
            </div>

            <img className="postedImage" src={props.postOnProps.imageUrl} alt="post" />

            <div className="PostIcons">
            <button onClick={props.postLiked} > </button>
                <div><i className="far fa-heart"></i></div>
                <div><i className="far fa-comment"></i></div>
            </div>

            <h4 className="likes">{props.postOnProps.likes} likes</h4>
            
            
            <CommentSection
                comments={props.postOnProps.comments}
            />

            <div className="timestamp">
                <h5>{moment(props.postOnProps.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</h5>
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
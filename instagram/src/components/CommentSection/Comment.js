import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div className="comment">
            <div><p className="bold">{props.commentOnProps.username}</p></div>
            <p>{props.commentOnProps.text}</p>
        </div>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;

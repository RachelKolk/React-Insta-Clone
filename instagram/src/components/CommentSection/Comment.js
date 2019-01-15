import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
        <div>
            <h4>{props.commentOnProps.username}</h4>
            <p>{props.commentOnProps.text}</p>
        </div>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;

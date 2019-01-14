import React from "react";

const Comment = props => {
    return (
        <div>
            <h4>{props.commentOnProps.username}</h4>
            <p>{props.commentOnProps.text}</p>
        </div>
    )
};

export default Comment;

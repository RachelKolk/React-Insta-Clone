import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";


function CommentSection(props) {
    console.log("commenting...");
    return (
        <div>
            {props.comments.map(commentInMap => (
                <Comment
                    commentOnProps={commentInMap}
                />             
            ))}
        </div>
    );
};

CommentSection.propTypes = {
   comments: PropTypes.shape({
       username: PropTypes.string,
       text: PropTypes.string
   }) 
}

export default CommentSection;


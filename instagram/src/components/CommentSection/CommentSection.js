import React from "react";

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

export default CommentSection;


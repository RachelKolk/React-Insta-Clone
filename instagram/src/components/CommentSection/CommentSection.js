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

    
    
}

// function addNewComment(e, index) {
//     e.preventDefault();
//     this.setState({
        
//            posts: [
//                ...this.state.comments,
//                {
//                    username: "gardenGnome",
//                    text: this.state.text,

//                }
//            ],
           
//            text: ''
//     })
// }

CommentSection.propTypes = {
   comments: PropTypes.shape({
       username: PropTypes.string,
       text: PropTypes.string
   }) 
}

export default CommentSection;


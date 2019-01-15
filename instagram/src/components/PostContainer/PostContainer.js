import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";


function PostContainer(props) {
    console.log("posting...");
    return (
        <div>
            {props.posts.map(postInMap => (
                
                <Post 
                    postOnProps={postInMap}

                />           
              
                
            ))}
            
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
    })
}

export default PostContainer;

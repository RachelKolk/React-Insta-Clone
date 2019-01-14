import React from "react";
import Post from "./Post";

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

export default PostContainer;

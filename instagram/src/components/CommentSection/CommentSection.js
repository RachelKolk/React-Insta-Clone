import React, { Component } from "react";
// import PropTypes from "prop-types";

import Comment from "./Comment";

class CommentSection extends Component {
    constructor(props) {
        console.log("firing CommentSection Constructor");
        super();
        this.state = {
            comments: [...props.comments],
            likes: props.likes
        };
        console.log(this.state.comments);
    }

    


    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
      }
    
    addNewComment = (e) => {
        e.preventDefault();
        console.log("posting comment");
        console.log(e);
        this.setState({
          
          comments: [
            ...this.state.comments,
              { username: "gardenGnome",
                text: this.state.comment, //assigning the form input value to the new comment
              }
          ],
          comment: "Add a comment..."
        })
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }



 render() {
    console.log("commenting...");
    return (
        <div>
            <div className="PostIcons">
            
                <div onClick={this.incrementLikes}><i className="far fa-heart"></i></div>
                <div><i className="far fa-comment"></i></div>
            </div>

            <h4 className="likes">{this.state.likes} likes</h4>

             {this.state.comments.map(commentInMap => (  
                 <Comment
                    commentOnProps={commentInMap}
                />             
            ))}

            <div className="addComment">
                {/* <div className="bold">Add a comment...</div>
                <div><i className="fas fa-ellipsis-h"></i></div> */}
                <form onSubmit={this.addNewComment}>
                    <input
                        value={this.state.comment} //creating a new variable to hold the data in state
                        type="text"
                        name="comment"
                        placeholder="Add a comment..."
                        onChange={this.handleChanges}
                    />
                </form>
                <div><i className="fas fa-ellipsis-h"></i></div>   
            </div>

        </div>
    );
    }
    
    
}


// CommentSection.propTypes = {
//    comments: PropTypes.shape({
//        username: PropTypes.string,
//        text: PropTypes.string
//    }) 
// }

export default CommentSection;


import React, { Component } from "react";
import styled from 'styled-components';
// import PropTypes from "prop-types";
import {H4Header} from "../StyledComponents";

import Comment from "./Comment";

const AddComment = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: 3%;
    padding-left: 3%;
    padding-bottom: 2%;
    border-top: 1px solid lightgray;
`;

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
        let user = localStorage.getItem("username");
        this.setState({
          
          comments: [
            ...this.state.comments,
              { username: JSON.parse(user),
                text: this.state.comment, //assigning the form input value to the new comment
              }
          ],
          comment: ""
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

            <H4Header>{this.state.likes} likes</H4Header>

             {this.state.comments.map(commentInMap => (  
                 <Comment
                    commentOnProps={commentInMap}
                />             
            ))}

            <AddComment>
                
                <form onSubmit={this.addNewComment}>
                    <input
                        value={this.state.comment} //creating a new variable to hold the data in state
                        type="text"
                        name="comment"
                        placeholder="Add a comment..."
                        onChange={this.handleChanges}
                    />
                </form>
                {/* <div><i className="fas fa-ellipsis-h"></i></div>    */}
            </AddComment>

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


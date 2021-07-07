import React, { Component } from "react";
import styled from 'styled-components';
// import PropTypes from "prop-types";
import {H4Header} from "../StyledComponents";

import Comment from "./Comment";

const PostIcons = styled.div`
    display: flex;
    flex-wrap: wrap;    
    margin-top: 1%;    
    width: 100%;
    padding-left: 3%;
`;

const AddComment = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 3%;
    padding-top: 1%;
    padding-left: 3%;
    padding-bottom: 2%;
    border-top: 1px solid lightgray;
`;

const CommentForm = styled.form`
    
`;

const CommentInput = styled.input`
    line-height: 4rem;
    width: 600px;
    border: 0px solid;
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
            <PostIcons>
            
                <div onClick={this.incrementLikes}><i className="far fa-heart"></i></div>
                <div><i className="far fa-comment"></i></div>
            </PostIcons>

            <H4Header>{this.state.likes} likes</H4Header>

             {this.state.comments.map(commentInMap => (  
                 <Comment
                    commentOnProps={commentInMap}
                />             
            ))}

            <AddComment>
                
                <CommentForm onSubmit={this.addNewComment}>
                    <CommentInput
                        value={this.state.comment} //creating a new variable to hold the data in state
                        type="text"
                        name="comment"
                        placeholder=" Add a comment..."
                        onChange={this.handleChanges}
                    />
                </CommentForm>
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


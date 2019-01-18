import React from "react";
import moment from "moment";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../CommentSection/CommentSection.css";

const PostBox = styled.div`
    width: 640px;
    border: 1px solid lightgray;
    border-radius: 2px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
    padding-bottom: 1%;
`;

const PostHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 1%;
`;

const UserThumbnail = styled.img`
    max-height: 50px;
    padding-left: 1%;
    padding-bottom: 1%;
    padding-top: 1%;
    padding-right: 1%;
    border-radius: 155px;
`;

const UserTag = styled.h4`
    margin-left: 1%;
    font-family: 'Muli', sans-serif;
    font-weight: 900;
`;

const TimeStamp = styled.div`
    padding-left: 3%;
`;

const Date = styled.h5`
    font-family: 'Muli', sans-serif;
    font-weight: 400;
`;


const Post = props => {
    return (
        <PostBox>

            <PostHeader>
                <UserThumbnail src={props.postOnProps.thumbnailUrl} alt="logo thumbnail"/>
                <UserTag>{props.postOnProps.username}</UserTag>
            </PostHeader>

            <img className="postedImage" src={props.postOnProps.imageUrl} alt="post" />
          
            
            <CommentSection
                comments={props.postOnProps.comments}
                likes={props.postOnProps.likes}
            />

            <TimeStamp>
                <Date>{moment(props.postOnProps.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</Date>
            </TimeStamp>

           

        </PostBox> 
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
        
    })
};

export default Post;
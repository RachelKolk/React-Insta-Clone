import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Paragraph} from "../StyledComponents"

const CommentSection = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    margin-left: 1%;
    padding-left: 1%;
    margin-bottom: -2%;
    margin-top: -3%;
`;

const CommentHandle = styled(Paragraph)`
    font-family: 'Muli', sans-serif;
    font-weight: 700;
    margin-left: 1%;
    margin-right 1.5%;
`;

const Comment = props => {
    return (
        <CommentSection>
            <CommentHandle>{props.commentOnProps.username}</CommentHandle>
            <Paragraph>{props.commentOnProps.text}</Paragraph>
        </CommentSection>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;

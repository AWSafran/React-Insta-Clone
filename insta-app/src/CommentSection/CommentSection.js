import React, { Component } from 'react';
import './CommentSection.css'

import styled, {css} from 'styled-components';

const CommentContainer = styled.div`
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    border-top: none;
    padding: 10px;
    width:77.5%;
    margin: 0 auto 20px;
    text-align: left;
    line-height: 24px;
    font-size: 2.4rem;
`;

const Strong = styled.strong`
    font-size: 1.8rem;
`;

const Symbols = styled.div`
    text-align: left;
    font-size: 3rem; 
`;

const NumOfLikes = styled.div`
    text-align: left;
`;

const Input = styled.input`
    width: 95%;
    border: 1px solid #e6e6e6;
    height: 20px;
    border-radius: 2px;
`;

const CommentDate = styled.div`
    color: silver;
    font-size: 1.2rem;
`;

class CommentSection extends Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state={
            comments: props.comments,
            newComment: '',
            likes: props.likes,
            liked: false
        }
    }

    commentChange = e =>{
        console.log("someone is typing!")
        this.setState({newComment: e.target.value})
    }

    newComment = e =>{
        e.preventDefault();
        console.log(localStorage.getItem('user'));
        const postedComment = {
            id: Date.now(),
            username: localStorage.getItem('user'),
            text: this.state.newComment
        }

        this.setState({
            comments: [...this.state.comments, postedComment],
            newComment: ''
        })
    }

    like = e =>{

        const likeButton = e.target;
        //console.log(likeButton);

        if (!this.state.liked){
            const newLikes = this.state.likes + 1;
            this.setState({likes: newLikes, liked: true});
            likeButton.style.color = 'red';
        }
        else{
            const newLikes = this.state.likes - 1;
            this.setState({likes: newLikes, liked: false});
            likeButton.style.color = 'black';
        }
    }

    render(){
        return (
            <CommentContainer>
                <Symbols><i 
                    className="far fa-heart"
                    onClick={this.like}
                ></i> <i className="far fa-comment"></i></Symbols>
                <NumOfLikes>{this.state.likes} likes</NumOfLikes>
                {this.state.comments.map(x => (
                    <div key={x.id} className="commentContent"><Strong>{x.username}</Strong> {x.text}</div>
                ))}
                <CommentDate>{this.props.date}</CommentDate>
                <form onSubmit={this.newComment}>
                    <Input 
                        type="text"
                        onChange={this.commentChange}
                        value={this.state.newComment}
                    />
                </form>
            </CommentContainer>
        );
    }
}

export default CommentSection;
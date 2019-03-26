import React, { Component } from 'react';
import './CommentSection.css'

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
        console.log("submitted a comment");
        const postedComment = {
            id: Date.now(),
            username: 'you',
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
            <div className="commentSection">
                <div className="symbols"><i 
                    className="far fa-heart"
                    onClick={this.like}
                ></i> <i className="far fa-comment"></i></div>
                <div className="numOfLikes">{this.state.likes} likes</div>
                {this.state.comments.map(x => (
                    <div key={x.id} className="commentContent"><strong>{x.username}</strong> {x.text}</div>
                ))}
                <div className="date">{this.props.date}</div>
                <form onSubmit={this.newComment}>
                    <input 
                        type="text"
                        onChange={this.commentChange}
                        value={this.state.newComment}
                    />
                </form>
            </div>
        );
    }
}

export default CommentSection;
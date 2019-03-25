import React from 'react';
import './CommentSection.css'

const CommentSection = props =>{
    return (
        <div className="commentSection">
            <div className="symbols"><i className="far fa-heart"></i> <i className="far fa-comment"></i></div>
            <div className="numOfLikes">{props.likes} likes</div>
            {props.comments.map(x => (
                <div className="commentContent"><strong>{x.username}</strong> {x.text}</div>
            ))}
            <div className="date">{props.date}</div>
            <form>
                <input />
            </form>
        </div>
    );
}

export default CommentSection;
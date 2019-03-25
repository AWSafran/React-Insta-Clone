import React from 'react';

const CommentSection = props =>{
    return (
        <div>
            <div className="symbols">Heart and Comment bubble here</div>
            <div className="numOfLikes">{props.likes} likes</div>
            {props.comments.map(x => (
                <div className="commentContent"><strong>{x.username}</strong> {x.text}</div>
            ))}
        </div>
    );
}

export default CommentSection;
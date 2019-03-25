import React from 'react';
import './Post.css';

const Post = props =>{
    //console.log(props);
    return(
        <div>
            <div className="postHeader">
                <img className="thumbnail" src={props.thumbImg} alt="User Thumbnail"/>
                <h2>{props.user}</h2>
            </div>
            <img className="mainImage" src={props.postImage} alt="Post"/>
        </div>
    );
}

export default Post;
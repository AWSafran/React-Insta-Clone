import React from 'react';

const Post = props =>{
    //console.log(props);
    return(
        <div>
            <img className="thumbnail" src={props.thumbImg} alt="User Thumbnail"/>
            <h2>{props.user}</h2>
            <img className="mainImage" src={props.postImage} alt="Post"/>
        </div>
    );
}

export default Post;
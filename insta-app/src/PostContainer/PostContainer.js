import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props =>{
    //console.log(props);
    return(
        <div className="posts">
            {props.posts.map(x => (
                <div className = "postContainer">
                    <Post 
                        key={x.id}
                        thumbImg={x.thumbnailUrl}
                        user={x.username}
                        postImage={x.imageUrl}    
                    />
                    <CommentSection />
                </div>
            ))}
        </div>
    )
}

export default PostContainer;
import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props =>{
    console.log(props);
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
                    <CommentSection
                        key={x.id+1}
                        likes={x.likes}
                        comments={x.comments}
                        date={x.timestamp}
                    />
                </div>
            ))}
        </div>
    )
}

export default PostContainer;
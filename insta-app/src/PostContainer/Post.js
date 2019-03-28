import React from 'react';
import './Post.css';

import styled, {css} from 'styled-components';

const PostHeader = styled.div`
    display: flex;
    height: 40px;
    width: 77.5%;
    margin: auto;
    border: 1px solid #e6e6e6;
    border-bottom: none;
    border-radius: 2px;
    padding: 10px;
`;

const HeaderImg = styled.img`
    border-radius: 50%;
    height: 30px;
    width: auto;
`;

const HeaderUsername = styled.h2`
    margin-left: 20px;
    padding-top: 8px;
    font-size: 1.6rem;
`;

const PostImg = styled.img`
    width: 80%;
`;

const Post = props =>{
    //console.log(props);
    return(
        <div>
            <PostHeader>
                <HeaderImg src={props.thumbImg} alt="User Thumbnail"/>
                <HeaderUsername>{props.user}</HeaderUsername>
            </PostHeader>
            <PostImg src={props.postImage} alt="Post"/>
        </div>
    );
}

export default Post;
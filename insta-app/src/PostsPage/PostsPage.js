import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import './PostsPage.css';

import styled, {css} from 'styled-components';

const LogoutContainer = styled.form`
    margin: 20px auto;
`;

const LogoutButton = styled.button`
    background: none;
    border: none;
    text-align: center;
    margin: auto;
`;

const PostsPage = props =>{
    return(
        <div className="App">
            <SearchBar 
            searchChange={props.searchChange}
            search={props.search}
            searchSubmit={props.searchSubmit}
            />
            <PostContainer posts={props.posts} />
            <LogoutContainer 
                className="logout"
                onSubmit={() => localStorage.removeItem('user')}
            >
                <LogoutButton>Log Out</LogoutButton>
            </LogoutContainer>
        </div>
    );
}

export default PostsPage;
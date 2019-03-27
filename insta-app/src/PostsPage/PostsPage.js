import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

const PostsPage = props =>{
    return(
        <div className="App">
            <SearchBar 
            searchChange={props.searchChange}
            search={props.search}
            searchSubmit={props.searchSubmit}
            />
            <PostContainer posts={props.posts} />
        </div>
    );
}

export default PostsPage;
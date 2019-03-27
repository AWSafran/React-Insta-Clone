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
            <form 
                className="logout"
                onSubmit={() => localStorage.clear()}
            >
                <button>Log Out</button>
            </form>
        </div>
    );
}

export default PostsPage;
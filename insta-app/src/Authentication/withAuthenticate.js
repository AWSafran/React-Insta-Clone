import React from 'react';

const withAuthenticate = Comp => props =>{
    return <Comp 
        searchChange={props.searchChange}
        search={props.search}
        searchSubmit={props.searchSubmit}
        posts={props.posts}
    />
}

export default withAuthenticate;
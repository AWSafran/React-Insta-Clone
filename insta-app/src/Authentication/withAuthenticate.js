import React from 'react';

const withAuthenticate = Comp => props =>{
    // class extends React.Component{
    //     render(){
            return <Comp 
                searchChange={props.searchChange}
                search={props.search}
                searchSubmit={props.searchSubmit}
                posts={props.posts}
            />
        // }
    }

export default withAuthenticate;
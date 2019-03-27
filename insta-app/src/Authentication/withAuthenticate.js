import React from 'react';

const withAuthenticate = Comp => OtherComp=> props =>{
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user')){
        console.log("we have stored a user!")
        return <Comp 
        searchChange={props.searchChange}
        search={props.search}
        searchSubmit={props.searchSubmit}
        posts={props.posts}
    />
    }
    
    return <OtherComp/>
}

export default withAuthenticate;
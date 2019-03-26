import React from 'react';
import '../SearchBar/SearchBar.css'

const SearchBar = props =>{
    return(
        <header>
            <div className="logo"><i className="fab fa-instagram"></i> Instagram</div>
            <form onSubmit={props.searchSubmit}>
                <input 
                    type='text' 
                    value={props.search}
                    onChange={props.searchChange}
                />
            </form>
            <nav> <i className="far fa-compass"></i><i className="far fa-heart"></i><i className="far fa-user"></i></nav>
        </header>
    )
}

export default SearchBar;
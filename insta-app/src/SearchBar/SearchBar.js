import React from 'react';
import '../SearchBar/SearchBar.css'

import styled, {css} from 'styled-components';

const Header = styled.header`
display: flex;
width: 95%;
text-align: center;
justify-content: space-between;
height: 40px;
margin: 10px auto;
font-size: 4.8rem;
`;

const Form = styled.form`
    width: 40%;
`;

const Nav = styled.nav`
    width: 20%;    
`;

const Input = styled.input`
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    width: 90%;
`;

const SearchBar = props =>{
    return(
        <Header>
            <div className="logo"><i className="fab fa-instagram"></i> Instagram</div>
            <Form onSubmit={props.searchSubmit}>
                <Input 
                    type='text' 
                    value={props.search}
                    onChange={props.searchChange}
                />
            </Form>
            <Nav> <i className="far fa-compass"></i><i className="far fa-heart"></i><i className="far fa-user"></i></Nav>
        </Header>
    )
}

export default SearchBar;
import React from 'react';
import './Login.css';

import styled, {css} from 'styled-components';

const LoginForm = styled.form`
    width: 30%;
    margin: 200px auto;
    text-align: center;
`;

const InputTitle = styled.p`
    margin-bottom: 10px;
    font-size: 2.4rem;
`;

const LoginInput = styled.input`
    margin-bottom: 10px;
    height: 30px;
    text-align: center;
`;

const LoginButton = styled.button`
    border: none;
    background: none;
    border-radius: 2px;
    width: 70%;
    height: 40px;
`;

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userTyped: '',
            passTyped: '',
        }
    }

    userChange = e =>{
        console.log(e.target.value);
        this.setState({userTyped: e.target.value})
    }

    passChange = e =>{
        console.log(e.target.value);
        this.setState({passTyped: e.target.value})
    }

    userLogin = e =>{
       //e.preventDefault();
        console.log(localStorage);
        localStorage.setItem('user',  this.state.userTyped);
        this.setState({
            passTyped: '',
            userTyped: ''
        })
    }

    render(){
        return(
            <div className="loginContainer">
                <LoginForm
                    onSubmit={this.userLogin}
                >
                    <InputTitle>Username:</InputTitle>
                    <LoginInput 
                        type="text"
                        value={this.state.userTyped} 
                        onChange={this.userChange}
                    />
                    <InputTitle>Password:</InputTitle>
                    <LoginInput 
                        type="password"
                        value={this.state.passTyped} 
                        onChange={this.passChange} 
                    />
                    <LoginButton>Login</LoginButton>
                </LoginForm>
            </div>
        );
    }
}

export default Login;
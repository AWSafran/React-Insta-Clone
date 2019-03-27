import React from 'react';

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
        localStorage.setItem('user', {username: this.state.userTyped});
        this.setState({
            passTyped: '',
            userTyped: ''
        })
    }

    render(){
        return(
            <form className="loginForm"
                onSubmit={this.userLogin}
            >
                <p>Username:</p>
                <input 
                    type="text"
                    value={this.state.userTyped} 
                    onChange={this.userChange}
                />
                <p>Password:</p>
                <input 
                    type="text"
                    value={this.state.passTyped} 
                    onChange={this.passChange} 
                />
                <button>Login</button>
            </form>
        );
    }
}

export default Login;
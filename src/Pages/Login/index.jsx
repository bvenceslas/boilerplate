import React  from 'react';
import './index.css';

const Login = ( ) => {
    return (
        <div className="login-container">
            <div className="login-form">
                <input type="text" placeholder="Enter username"/>
                <input type="password" placeholder="Enter password"/>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;
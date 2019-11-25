import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Login.scss";

export const Login : React.FC= () => {
    return (
        <div className="login_container">
            
                <div className="username-container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input id="username" name="username" type="text"/>
                </div>
                <div className="password-container">
                    <label htmlFor="password"><b>Password</b></label>
                    <input id="password" name="password" type="text"/>
                </div>
                <Link to="/CreateAccount" id="forgot-password">Forgot your password?</Link>
                <Link to="/Dashboard" id="login"><button>Login</button></Link>
                <h1>OR</h1>
                <button><Link to="/CreateAccount">Sign Up</Link></button>
        </div>
    );
}
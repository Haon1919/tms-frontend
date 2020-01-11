import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.scss';

export const Login : React.FC= () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className={styles.login_container}>
            
        <div className={styles.username_container}>
            <label htmlFor="username"><b>Username</b></label>
            <input id="username" name="username" type="text" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className={styles.password_container}>
            <label htmlFor="password"><b>Password</b></label>
            <input id="password" name="password" type="text" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Link to="/CreateAccount" className={styles.forgot_password}>Forgot your password?</Link>
        <Link to="/Dashboard" id={styles.login}>Login</Link>
        <h1>OR</h1>
        <Link to="/CreateAccount" id={styles.create_account}>Sign Up</Link>
        
        </section>
    );
}
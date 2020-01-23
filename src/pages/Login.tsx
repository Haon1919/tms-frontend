import React, {useState, useContext, useEffect} from 'react';
import { Link, Redirect, withRouter, useHistory } from 'react-router-dom';
import styles from '../styles/Login.module.scss';

export const Login : React.FC= () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [toDashboard, setToDashboard] = useState(false);

    let history = useHistory();

    const submitLoginForm = (e : React.FormEvent) => {
        e.preventDefault();
        console.log("submitting");
        history.push('/Dashboard');
    }

    return (
        <form className={styles.login_container} onSubmit={submitLoginForm}>
        <div className={styles.username_container}>
            <label htmlFor="username" className={styles.login_label}><b>Username</b></label>
            <input id="username" name="username" type="text" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className={styles.password_container}>
            <label htmlFor="password" className={styles.login_label}><b>Password</b></label>
            <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Link to="/CreateAccount" className={styles.forgot_password}>Forgot your password?</Link>
        <input className={styles.login} type="submit" value="Login"/>
        <h1>OR</h1>
        <Link to="/CreateAccount" className={styles.create_account}>Sign Up</Link>

        </form>
    );
}
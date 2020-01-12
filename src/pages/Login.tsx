import React, {useState, useContext, useEffect} from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import styles from '../styles/Login.module.scss';
import { render } from 'enzyme';
//import { render } from 'enzyme';

export const Login : React.FC= () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [toDashboard, setToDashboard] = useState(false); this is for the future redirect solution
    const submitLoginForm = (e : any) => {
        e.preventDefault();
        console.log("submitting");
        //return <Redirect to="/Dashboard"/> this isn't working right now.
    }
    return (
        <form className={styles.login_container} onSubmit={(e) => {submitLoginForm(e)}}>
        <div className={styles.username_container}>
            <label htmlFor="username"><b>Username</b></label>
            <input id="username" name="username" type="text" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className={styles.password_container}>
            <label htmlFor="password"><b>Password</b></label>
            <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Link to="/CreateAccount" className={styles.forgot_password}>Forgot your password?</Link>
        <input id={styles.login} type="submit" value="Login"/>
        <h1>OR</h1>
        <Link to="/CreateAccount" id={styles.create_account}>Sign Up</Link>

        </form>
    );
}
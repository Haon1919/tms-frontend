import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../styles/Login.scss";
import { UserContext } from '../contexts/UserContext';

//TODO: Remove when login functionaility or a better solution for testing logins is found
const testLogin = {
    userName: "John123",
    password: "dude",
    userInfo: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        ageClass: "ADULT"
    }
};

export const Login : React.FC= () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {updateUser} = useContext(UserContext);  

    const loginUser = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        if(name === testLogin.userName && password === testLogin.password && updateUser !== undefined){
            updateUser(testLogin.userInfo);
        }
    }
    return (
        
        // <section>
        //     <form onSubmit={loginUser}>
        //         <input type="text" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />   
        //         <input type="password" value={password} onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
        //         <input type="submit" value="submit"/>
        //     </form>
            
        // </section>
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
        <Link to="/Dashboard" id="login">Login</Link>
        <h1>OR</h1>
        <button><Link to="/CreateAccount">Sign Up</Link></button>
        </div>
    );
}
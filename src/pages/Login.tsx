import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/Login.module.scss';
import { FormInput } from '../components/FormInput';
import { InputChangeParameters } from  "../types/FormInputTypes";
import { UserContext } from '../contexts/UserContext';
import Requests from '../Requests';
import {User} from '../types/UserTypes';


export const Login : React.FC= () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [selctedInputKey, setSelectedInputKey] = useState("");
    const [errorText, setErrorText] = useState("");
    const [loginFail, setLoginFail] = useState(false);

    let history = useHistory();
    const {updateUser} = useContext(UserContext);  
    const isDisabled = username === "" || password === "";

    const submitLoginForm = (e : React.FormEvent) => {
        e.preventDefault();
        const credentials = {
            email: username,
            password: password
        }
        Requests.login(credentials).then((res : any) => {
            if(updateUser !== undefined) {
                updateUser(res.data.user);
                history.push("/Calendar");
            }
        }).catch(err  => {
            let errorText = "";
            switch(err.response.status) {
                case 401:
                    errorText = "Uhoh! The username or password you entered did not match our records. Please double check and try again!"
                    break;
                default:
                    errorText = "Oops! Something went wrong on our end. Please notify your instructor or try again later."
            }
            setErrorText(errorText);
            setLoginFail(true);
        });
    }

    const handleInputChange = (action: InputChangeParameters) => {
        if(loginFail) {
            setLoginFail(false);
        }
        if(action.type === "UPDATEFORM"){
            if(action.formDataKey === "username") {
                setUsername(action.value);
            } else {
                setPassword(action.value);
            }
        } else if(action.type === "FOCUS"){
            setSelectedInputKey(action.value);
        }
    }

    return (
        <form className={styles.login_container} onSubmit={submitLoginForm}>
            <h1 className={styles.title}>Twigg Music Studio Login</h1>
            {loginFail && 
                <p className = {styles.login_fail}>{errorText}</p>
            }
            <FormInput
                inputChange={handleInputChange}
                inputKey="username"
                label="Username"
                inputType="text"
                currentValue={username}
                selectedKey={selctedInputKey}
                required={false}
                styles={styles}
            >
                <input/>
            </FormInput>
            <FormInput
                inputChange={handleInputChange}
                inputKey="password"
                label="Password"
                inputType="password"
                currentValue={password}
                selectedKey={selctedInputKey}
                required={false}
                styles={styles}
            >
                <input/>
            </FormInput>
        <Link to="/ForgotPassword" className={styles.forgot_password}>Forgot your password?</Link>
        <input disabled={isDisabled} className={`${styles.login} ${isDisabled ? styles.disabled : ""}`} type="submit" value="Login"/>
        <h3>OR</h3>
        <Link to="/CreateAccount" className={styles.create_account}>Sign Up</Link>

        </form>
    );
}
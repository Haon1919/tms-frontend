import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/Login.module.scss';
import { FormInput } from '../components/FormInput';
import { InputChangeParameters } from  "../types/FormInputTypes";

export const Login : React.FC= () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [selctedInputKey, setSelectedInputKey] = useState("");
    const [loginFail, setLoginFail] = useState(false);

    let history = useHistory();

    const isDisabled = username === "" || password === "";

    const submitLoginForm = (e : React.FormEvent) => {
        e.preventDefault();
        //TODO: When login successful set necessary user information then navigate to dashboard.
        // history.push('/Dashboard');
        //TODO: If login fails because the user provided incorrect credentials set loginFail to true and remove the password.
        setLoginFail(true);
        setPassword("");
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
                <p className = {styles.login_fail}>Uhoh! The username or password you entered did not match our records. Please double check and try again!</p>
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
            />
            <FormInput
                inputChange={handleInputChange}
                inputKey="password"
                label="Password"
                inputType="password"
                currentValue={password}
                selectedKey={selctedInputKey}
                required={false}
                styles={styles}
            />
        <Link to="/ForgotPassword" className={styles.forgot_password}>Forgot your password?</Link>
        <input disabled={isDisabled} className={`${styles.login} ${isDisabled ? styles.disabled : ""}`} type="submit" value="Login"/>
        <h3>OR</h3>
        <Link to="/CreateAccount" className={styles.create_account}>Sign Up</Link>

        </form>
    );
}
import React, {useState, useMemo} from 'react';
import styles from '../styles/ResetPassword.module.scss';
import { FormInput } from '../components/FormInput';
import { InputChangeParameters } from '../types/FormInputTypes';
import { useHistory } from "react-router-dom";
import Requests from '../Requests';




export const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [selectedInputKey, setSelectedInputkey] = useState('');
    const [failingForms, setFailingForms] = useState<string[]>([]);
    const [resetPasswordFormSubmitted, setResetPasswordFormSubmitted]= useState(false);

    const isDisabled = !!failingForms.length;

    let history = useHistory();

    // let PasswordVerification = useMemo(() => {
    //     return {
    //         match: password,
    //         failedMesg: "You're passwords do not match",
    //         changeInvalidFormsList: setFailingForms
    //     }
    // }, []);

    const submitResetPasswordForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submitting");
        setResetPasswordFormSubmitted(true);
        setTimeout(()=> {
            history.push("/Login");
        }, 5000);
    }

    const handleInputChange = (action: InputChangeParameters) => {
        if(action.type === "UPDATEFORM"){
            if(action.formDataKey === "password"){
                setPassword(action.value);
            }
            else if(action.formDataKey === "verifyPassword"){
                setVerifyPassword(action.value);
            }
        }else if(action.type === "FOCUS"){
            setSelectedInputkey(action.value)
        }
    }

    return(
        <section>
            
            <form className={resetPasswordFormSubmitted ? styles.reset_password_form_submitted: styles.reset_password_form} onSubmit={submitResetPasswordForm}>
                <h1>Want to reset your Password?</h1>
                <p>Enter your new password in the fields below.</p>
                <FormInput
                    inputChange={handleInputChange}
                    inputKey="password"
                    label="Password"
                    inputType="password"
                    currentValue={password}
                    selectedKey={selectedInputKey}
                    required={true}
                    styles={styles}
                >
                <input/>
                </FormInput>
                <FormInput
                    inputChange={handleInputChange}
                    inputKey="verifyPassword"
                    label="Verify Password"
                    inputType="password"
                    currentValue={verifyPassword}
                    selectedKey={selectedInputKey}
                    required={true}
                    styles={styles}
                >
                <input/>
                </FormInput>
                <input className={isDisabled ? `${styles.send_reset_password_form} ${styles.disabled}` : `${styles.send_reset_password_form}`}  type="submit" value="Reset Password" disabled={isDisabled}/>
            </form>
            <h1 className={styles.submitted_reset_password_form_text} style={{"display":(resetPasswordFormSubmitted ? "block" : "none")}}>Your Password has been reset!<br/> You will be redirected to the login page in 5 seconds.</h1>
        </section>
    )
}


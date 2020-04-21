import React, {useState, useMemo} from 'react';
import styles from '../styles/ForgotPassword.module.scss';
import { FormInput } from '../components/FormInput';
import { InputChangeParameters } from '../types/FormInputTypes';
import Requests from '../Requests';


const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [selectedInputKey, setSelectedInputkey] = useState('');
    const [failingForms, setFailingForms] = useState<string[]>([]);
    const [forgotPasswordFormSubmitted, setForgotPasswordFormSubmitted]= useState(false);

    const isDisabled = !!failingForms.length;

    let emailValidation = useMemo(() => {
        return {
            pattern: emailPattern,
            failedMesg: "Please provide a valid email.",
            changeInvalidFormsList: setFailingForms
        }
    }, []);

    const submitForgotPasswordForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submitting");
        Requests.sendResetPasswordEmail(email).then((res : any) => {
            setForgotPasswordFormSubmitted(true);

        }).catch(err  => {
            console.log("There was a problem!");
        });
    }

    const handleInputChange = (action: InputChangeParameters) => {
        if(action.type === "UPDATEFORM"){
            if(action.formDataKey === "email"){
                setEmail(action.value);
            }
        }else if(action.type === "FOCUS"){
            setSelectedInputkey(action.value)
        }
    }

    return(
        <section>
            
            <form className={forgotPasswordFormSubmitted ? styles.forgot_password_form_submitted: styles.forgot_password_form} onSubmit={submitForgotPasswordForm}>
                <h1>Forgot your Password?</h1>
                <p>Enter your email in the field below.</p>
                <FormInput
                    inputChange={handleInputChange}
                    inputKey="email"
                    label="Email"
                    inputType="text"
                    currentValue={email}
                    selectedKey={selectedInputKey}
                    required={true}
                    validation={emailValidation}
                    styles={styles}
                >
                <input/>
                </FormInput>
                <input className={isDisabled ? `${styles.send_forgot_password_form} ${styles.disabled}` : `${styles.send_forgot_password_form}`}  type="submit" value="Send Password Reset Link" disabled={isDisabled}/>
            </form>
            <h1 className={styles.submitted_forgot_password_form_text} style={{"display":(forgotPasswordFormSubmitted ? "block" : "none")}}>Your form has been submitted. If there is an account with the email you entered you should get an email to reset your password.</h1>
        </section>
    )
}


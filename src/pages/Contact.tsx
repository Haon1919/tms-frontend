import React, {useState} from 'react'
import whitneyAbout from '../assets/images/whitneyAbout.jpg';
import styles from '../styles/Contact.module.scss';
import textareaStyles from '../styles/ContactTextArea.module.scss';
import { FormInput } from '../components/FormInput';
import { InputChangeParameters } from  "../types/FormInputTypes";



export const Contact : React.FC= () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [selectedInputKey, setSelectedInputKey] = useState('')
    //const [contactFail, setContactFail] = useState(false);
    const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

    const submitContactForm = (e : React.FormEvent) => {
        e.preventDefault();
        console.log("submitting");
        setContactFormSubmitted(true);
    }

    const handleInputChange = (action: InputChangeParameters) => {
        if(action.type === "UPDATEFORM"){
            if(action.formDataKey === "name") {
                setName(action.value);
            } else if(action.formDataKey === "email") {
                setEmail(action.value);
            }else if(action.formDataKey === "message"){
                setMessage(action.value);
            }
        } else if(action.type === "FOCUS"){
            setSelectedInputKey(action.value);
        }
    }

    return (
        <section>
            <img className={styles.contact_image} src={whitneyAbout} alt="Whitney Twigg's Photo"/>
            <h1 className={styles.heading}>Contact Whitney</h1>
            <p className={styles.information}>I'd love to hear from you! You can email me at twiggmusicstudio@gmail.com or through the form below. There's no such thing as a silly question.</p>
            <form className={contactFormSubmitted ? styles.contact_form_submitted : styles.contact_form} onSubmit={submitContactForm}>
                <FormInput
                    inputChange={handleInputChange}
                    inputKey="name"
                    label="Name"
                    inputType="text"
                    currentValue={name}
                    selectedKey={selectedInputKey}
                    required={true}
                    styles={styles}
                >
                <input/>
                </FormInput>
                <FormInput
                    inputChange={handleInputChange}
                    inputKey="email"
                    label="Email"
                    inputType="text"
                    currentValue={email}
                    selectedKey={selectedInputKey}
                    required={true}
                    styles={styles}
                >
                <input/>
                </FormInput>
                <FormInput
                    inputChange={handleInputChange}
                    inputKey="message"
                    label="Message"
                    inputType="text"
                    currentValue={message}
                    selectedKey={selectedInputKey}
                    required={true}
                    styles={textareaStyles}
                >
                <textarea/>
                </FormInput>
                <input className={styles.send} type="submit" value="Send"/>
            </form>
            <h1 className={styles.submitted_form_text} style={{"display":(contactFormSubmitted ? "block" : "none")}}>Your contact form has been submitted. Whitney will be in contact with you soon.</h1>
        </section>
    );
}
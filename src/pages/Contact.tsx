import React, {useState} from 'react'
import whitneyAbout from '../assets/images/whitneyAbout.jpg';
import styles from '../styles/Contact.module.scss';


export const Contact : React.FC= () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

    const submitContactForm = (e : React.FormEvent) => {
        e.preventDefault();
        console.log("submitting");
        setContactFormSubmitted(true);
    }

    return (
        <section>
            <img className={styles.contact_image} src={whitneyAbout} alt="Whitney Twigg's Photo"/>
            <h1 className={styles.heading}>Contact Whitney</h1>
            <p className={styles.information}>I'd love to hear from you! You can email me at twiggmusicstudio@gmail.com or through the form below. There's no such thing as a silly question.</p>
            <form className={contactFormSubmitted ? styles.contact_form_submitted : styles.contact_form} onSubmit={submitContactForm}>
                <div className={styles.name_field}>
                    <label className={styles.contact_labels} htmlFor="name"><b>First and Last Name</b></label>
                    <input id="name" name="name" type="text" required onChange={e => setName(e.target.value)}/>
                </div>
                <div className={styles.email_field}>
                    <label className={styles.contact_labels} htmlFor="email"><b>Email</b></label>
                    <input id="email" name="email" type="text" required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className={styles.message_field}>
                    <label className={styles.contact_labels} htmlFor="message"><b>Message</b></label>
                    <textarea id="message" name="message" required onChange={e => setMessage(e.target.value)}/>
                </div>
                <input className={styles.send} type="submit" value="Send"/>
            </form>
            <h1 className={styles.submitted_form_text} style={{"display":(contactFormSubmitted ? "block" : "none")}}>Your contact form has been submitted. Whitney will be in contact with you soon.</h1>
        </section>
    );
}
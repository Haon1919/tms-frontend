import React from 'react';
import whitneyAbout from '../assets/images/whitneyAbout.jpg';
import styles from '../styles/Landing.module.scss';
import {useHistory} from "react-router-dom";

export const Landing : React.FC= () => {

    let history = useHistory();

    const learnMore = () => {
        history.push("/About");
    }

    const enrollClick = () => {
        history.push("/CreateAccount");
    }

    return (
        <section>
            {/*TODO header goes here*/}
            <section className={styles.background}>
                <div className={styles.headerText}>
                    <h1>WHITNEY TWIGG</h1>
                    <h2>Violin, Viola, Voice Instructor</h2>
                    <button onClick={enrollClick}>Enroll Today!</button>
                </div>
            </section>
            <div className={styles.content}>
                <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
                <button onClick={learnMore}>Learn More</button><br/>
                <img className={styles.picture} src={whitneyAbout}/>
                <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
                <button onClick={enrollClick}>Enroll Now!</button>
            </div>
        </section>
    );
}
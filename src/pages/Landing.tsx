import React from 'react';
import {Link} from 'react-router-dom';
import whitneyAbout from '../assets/images/whitneyAbout.jpg';
import styles from '../styles/Landing.module.scss';

export const Landing : React.FC= () => {

    return (
        <section className={styles.landing}>
            <section className={styles.background}>
                <div className={styles.headerText}>
                    <h1>WHITNEY TWIGG</h1>
                    <h2>Violin, Viola, Voice Instructor</h2>
                    <Link to = "/CreateAccount">Enroll Today!</Link>
                </div>
            </section>
            <div className={styles.content}>
                <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
                <a href={"/About"}>Learn More</a><br/>
                <img className={styles.picture} src={whitneyAbout}/>
                <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
                <Link to ="/CreateAccount">Enroll Now!</Link>
            </div>
        </section>
    );
}
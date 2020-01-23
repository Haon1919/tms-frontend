import React from 'react';
import whitneyAbout from '../assets/images/whitneyAbout.jpg';
import styles from '../styles/About.module.scss';

export const About : React.FC = () => {
    return (
        <section>
            <h1>Meet the Instructor</h1>
            <div className={styles.instructorImage}>
                <img className={styles.picture} src={whitneyAbout}/>
                <div className={styles.backgroundBox}>
                    <p className={styles.instructorName}>
                        Whitney Twigg
                    </p>
                </div>
            </div>
            <div className={styles.aboutParagraph}>
                <p>
                    This is a paragraph about the instructor which will be pretty long and span multiple paragraphs. Loram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit AmetLoram Ipsum Dolor Sit Amet
                </p>
            </div>
        </section>
    )
}
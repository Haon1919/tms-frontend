import React from 'react';
import {Link} from 'react-router-dom';
import whitneyAbout from '../assets/images/whitneyAbout.jpg';
import styles from '../styles/Services.module.scss';

export const Services : React.FC = () => {
    return (
        <section>
            <div className={styles.instructor_image}>
                <img className={styles.picture} src={whitneyAbout}/>
                <div className={styles.background_box}>
                    <p>
                        Schedule Your Lessons Today!
                    </p>
                </div>
            </div>
                <div>
                    <p className={styles.service_description}>
                        <b>
                            Lessons at Twigg Music Studio are fun, promote and celebrate growth, are unique to each student, challenging, rewarding and empowering
                        </b>
                    </p>
                    <p className={styles.service_description}>
                        <b>
                            Lessons are taught in my home studion in Muncie, Indiana. Parents may sit in on lessons or promptly drop off and pick up their student
                        </b>
                    </p>
                </div>
            <section className={styles.violin_lessons}>
                <h2 className={styles.lesson_type}>Violin Lessons</h2>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1/2 Hour</b></span>
                <span className={styles.services_price}><b>$15</b></span>
                </div>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1 Hour</b></span>
                <span className={styles.services_price}><b>$30</b></span>
                </div>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1 1/2 Hour</b></span>
                <span className={styles.services_price}><b>$40</b></span>
                </div>
            </section>
            <section className={styles.violin_lessons}>
                <h2 className={styles.lesson_type}>Violin Lessons</h2>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1/2 Hour</b></span>
                <span className={styles.services_price}><b>$15</b></span>
                </div>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1 Hour</b></span>
                <span className={styles.services_price}><b>$30</b></span>
                </div>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1 1/2 Hour</b></span>
                <span className={styles.services_price}><b>$40</b></span>
                </div>
            </section>
            <section className={styles.violin_lessons}>
                <h2 className={styles.lesson_type}>Violin Lessons</h2>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1/2 Hour</b></span>
                <span className={styles.services_price}><b>$15</b></span>
                </div>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1 Hour</b></span>
                <span className={styles.services_price}><b>$30</b></span>
                </div>
                <div className={styles.service_info}>
                <span className={styles.services_time_period}><b>1 1/2 Hour</b></span>
                <span className={styles.services_price}><b>$40</b></span>
                </div>
            </section>
            <Link to="/Login" className={styles.enroll}>Enroll Today!</Link>
        </section>
    )
}
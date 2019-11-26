import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from "../assets/images/downArrow.svg";
import styles from '../styles/Header.module.scss';

export const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [expandGeneral, toggleExpGeneral] = useState(true);
    const [expandStudent, toggleExpStudent] = useState(false);

    return (
        <section className={styles.header}>
            <section className={styles.banner}>
                <div className={styles.hamburger_wrapper}>
                    <div
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={toggleMenu ? `${styles.hamburger} ${styles.menu_open}` : styles.hamburger}
                    >
                        <div className={styles.middle_bar}></div>
                    </div>
                </div>
                <div className={styles.title}>
                    <Link to="/">Twigg Music Studio</Link>
                </div>
            </section>
            <div className={toggleMenu ? `${styles.menu_pane} ${styles.menu_open}` : styles.menu_pane}>
                <ul className={styles.menu}>
                    <li className={expandGeneral ? `${styles.open} ${styles.general}` : styles.general}>
                        <button onClick={() => toggleExpGeneral(!expandGeneral)}>
                                <span>General</span>
                                <img alt="" src={arrow} />
                        </button>
                        <ul>
                            <li>
                                <Link to="/">Landing</Link>
                            </li>
                            <li>
                                <Link to="/CreateAccount">CreateAccount</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Resources">Resources</Link>
                            </li>
                            <li>
                                <Link to="/Services">Services</Link>
                            </li>
                            <li>
                                <Link to="Login">Login</Link>
                            </li>
                        </ul>
                    </li>

                    <li className={expandStudent ? `${styles.open} ${styles.student}` : styles.student}>
                        <button onClick={() => toggleExpStudent(!expandStudent)}>
                            <span>Student</span>
                            <img alt="" src={arrow} />
                        </button>
                        <ul>
                            <li>
                                <Link to="/Calendar">Calendar</Link>
                            </li>
                            <li>
                                <Link to="/Wallet">Wallet</Link>
                            </li>
                            <li>
                                <Link to="/Settings">Settings</Link>
                            </li>
                            <li>
                                <Link to="/SchedualLesson">SchedualLesson</Link>
                            </li>
                            <li>
                                <Link to="/Lesson">Lesson</Link>
                            </li>
                            <li>
                                <Link to="/AgreementDocs">AgreementDocs</Link>
                            </li>
                            <li>
                                <Link to="/Dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className={styles.overlay}
                >
                </div>
            </div>
        </section>
    )
}

export default Header;